// Builds the Express app without starting it, so the same app can run as a
// local server (server.ts) or be wrapped for AWS Lambda later.
import express, { type ErrorRequestHandler } from "express";
import cors from "cors";
import { config } from "./config.js";
import { authRouter } from "./routes/auth.js";
import { clientsRouter } from "./routes/clients.js";
import { healthRouter } from "./routes/health.js";

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors({ origin: config.corsOrigins }));
  app.use(express.json({ limit: "100kb" }));

  app.use("/health", healthRouter);
  app.use("/auth", authRouter);
  app.use("/clients", clientsRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err);
    const status = typeof err?.status === "number" ? err.status : 500;
    res
      .status(status)
      .json({ error: status === 500 ? "Internal server error" : err.message });
  };
  app.use(errorHandler);

  return app;
}
