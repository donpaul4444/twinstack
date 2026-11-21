import { Router } from "express";
import { z } from "zod";
import { requireAdmin } from "../auth.js";
import { clientStore } from "../store/clients.js";

export const clientsRouter = Router();

const clientSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().pipe(z.email().max(200)),
  interest: z.string().trim().max(50).default("other"),
  budget: z.string().trim().max(50).default("undecided"),
  message: z.string().trim().min(1).max(5000),
});

// Public: the website's contact form (and later the mobile/desktop apps) submit here.
clientsRouter.post("/", async (req, res) => {
  const parsed = clientSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid client details",
      details: parsed.error.issues.map((i) => ({
        field: i.path.join("."),
        message: i.message,
      })),
    });
    return;
  }
  const client = await clientStore.create(parsed.data);
  res.status(201).json({ client });
});

// Admin only: list every submission, newest first.
clientsRouter.get("/", requireAdmin, async (_req, res) => {
  res.json({ clients: await clientStore.list() });
});
