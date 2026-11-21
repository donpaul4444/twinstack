"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  type FormEvent,
} from "react";
import { API_URL, type Client } from "@/lib/api";

// --- Admin token, kept in sessionStorage (cleared when the tab closes) ---

const TOKEN_KEY = "twinstack-admin-token";
const listeners = new Set<() => void>();
let memoryToken: string | null = null; // fallback when storage is unavailable

function readToken(): string | null {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch {
    return memoryToken;
  }
}

function writeToken(token: string | null) {
  memoryToken = token;
  try {
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    // Storage unavailable (private mode etc.) — memoryToken is used instead.
  }
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

const inputClass =
  "w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function AdminPanel() {
  // undefined while prerendering / hydrating, then the stored token or null.
  const token = useSyncExternalStore<string | null | undefined>(
    subscribe,
    readToken,
    () => undefined,
  );
  const logout = useCallback(() => writeToken(null), []);

  if (token === undefined) return null;

  return token ? (
    <Dashboard token={token} onLogout={logout} />
  ) : (
    <Login onLogin={writeToken} />
  );
}

function Login({ onLogin }: { onLogin: (token: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.token) {
        setError(data.error ?? "Login failed");
        return;
      }
      onLogin(data.token);
    } catch {
      setError("Can't reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-6 py-16 sm:py-24">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-border bg-white p-8 shadow-sm"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Admin
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
          Sign in
        </h1>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted"
            >
              Username
            </label>
            <input
              id="username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

async function fetchClients(
  token: string,
): Promise<Client[] | "unauthorized" | "error"> {
  try {
    const res = await fetch(`${API_URL}/clients`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) return "unauthorized";
    if (!res.ok) return "error";
    const data = await res.json();
    return data.clients as Client[];
  } catch {
    return "error";
  }
}

function Dashboard({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [clients, setClients] = useState<Client[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const load = () => {
    setLoading(true);
    setError(null);
    setReloadKey((k) => k + 1);
  };

  useEffect(() => {
    let cancelled = false;
    fetchClients(token).then((result) => {
      if (cancelled) return;
      if (result === "unauthorized") {
        onLogout();
        return;
      }
      if (result === "error") {
        setError("Couldn't load clients. Is the backend running?");
      } else {
        setClients(result);
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [token, onLogout, reloadKey]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground">
            Client inquiries
          </h1>
          <p className="mt-1 text-sm text-muted">
            {clients ? `${clients.length} total` : " "}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={load}
            disabled={loading}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-gray-50 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Log out
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-6 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700">
          {error}
        </p>
      )}

      {clients && clients.length === 0 && (
        <p className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted">
          No inquiries yet. Submissions from the contact form will appear here.
        </p>
      )}

      {clients && clients.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-3xl border border-border bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border bg-gray-50 text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-5 py-3 font-semibold">Date</th>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Email</th>
                <th className="px-5 py-3 font-semibold">Interest</th>
                <th className="px-5 py-3 font-semibold">Budget</th>
                <th className="px-5 py-3 font-semibold">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {clients.map((c) => (
                <tr key={c.id} className="align-top">
                  <td className="whitespace-nowrap px-5 py-4 text-muted">
                    {new Date(c.createdAt).toLocaleString()}
                  </td>
                  <td className="px-5 py-4 font-semibold text-foreground">
                    {c.name}
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={`mailto:${c.email}`}
                      className="text-accent hover:underline"
                    >
                      {c.email}
                    </a>
                  </td>
                  <td className="px-5 py-4 text-foreground">{c.interest}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-foreground">
                    {c.budget}
                  </td>
                  <td className="max-w-md whitespace-pre-wrap px-5 py-4 text-foreground">
                    {c.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
