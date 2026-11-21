import { createHash, timingSafeEqual } from "node:crypto";
import type { RequestHandler } from "express";
import { SignJWT, jwtVerify } from "jose";
import { config } from "./config.js";

const secret = new TextEncoder().encode(config.jwtSecret);

// Hash both sides first so the comparison takes the same time whatever the input length.
function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function checkCredentials(username: string, password: string): boolean {
  const userOk = safeEqual(username, config.adminUsername);
  const passOk = safeEqual(password, config.adminPassword);
  return userOk && passOk;
}

export function signToken(username: string): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(username)
    .setIssuedAt()
    .setExpirationTime(config.tokenTtl)
    .sign(secret);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });
    return payload.role === "admin";
  } catch {
    return false;
  }
}

/** Rejects the request with 401 unless it carries a valid admin Bearer token. */
export const requireAdmin: RequestHandler = async (req, res, next) => {
  const header = req.get("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token || !(await verifyToken(token))) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
};
