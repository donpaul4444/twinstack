// Reads settings from environment variables (loaded from .env in development).
// The admin credentials and JWT secret are hardcoded defaults for this test
// project; set ADMIN_USERNAME / ADMIN_PASSWORD / JWT_SECRET to override them.

function list(value: string | undefined, fallback: string[]): string[] {
  if (!value) return fallback;
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const config = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  corsOrigins: list(process.env.CORS_ORIGINS, ["http://localhost:3000"]),
  dataDir: process.env.DATA_DIR ?? "./data",

  adminUsername: process.env.ADMIN_USERNAME ?? "admin",
  adminPassword: process.env.ADMIN_PASSWORD ?? "Twinstack@2026",
  jwtSecret: process.env.JWT_SECRET ?? "twinstack-dev-secret-change-me",
  tokenTtl: "8h",
};
