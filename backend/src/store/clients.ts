// Stores client inquiries in a local JSON file. Keep all storage access in
// this module so it can later be swapped for DynamoDB without touching routes.
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { config } from "../config.js";

export interface ClientInput {
  name: string;
  email: string;
  interest: string;
  budget: string;
  message: string;
}

export interface Client extends ClientInput {
  id: string;
  createdAt: string;
}

const filePath = path.resolve(config.dataDir, "clients.json");

async function readAll(): Promise<Client[]> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as Client[];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(clients: Client[]): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp`;
  await writeFile(tmp, JSON.stringify(clients, null, 2));
  await rename(tmp, filePath);
}

// Run writes one at a time so two submissions can't overwrite each other.
let queue: Promise<unknown> = Promise.resolve();
function serialize<T>(task: () => Promise<T>): Promise<T> {
  const result = queue.then(task, task);
  queue = result.catch(() => undefined);
  return result;
}

export const clientStore = {
  create(input: ClientInput): Promise<Client> {
    return serialize(async () => {
      const clients = await readAll();
      const client: Client = {
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        ...input,
      };
      clients.push(client);
      await writeAll(clients);
      return client;
    });
  },

  async list(): Promise<Client[]> {
    const clients = await readAll();
    return clients.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
};
