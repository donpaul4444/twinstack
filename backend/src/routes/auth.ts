import { Router } from "express";
import { z } from "zod";
import { checkCredentials, signToken } from "../auth.js";

export const authRouter = Router();

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

authRouter.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success || !checkCredentials(parsed.data.username, parsed.data.password)) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }
  res.json({ token: await signToken(parsed.data.username) });
});
