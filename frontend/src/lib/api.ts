// Base URL of the Twinstack backend. Set NEXT_PUBLIC_API_URL at build time
// (it is inlined into the browser bundle); defaults to the local dev server.
export const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"
).replace(/\/+$/, "");

export interface Client {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  interest: string;
  budget: string;
  message: string;
}
