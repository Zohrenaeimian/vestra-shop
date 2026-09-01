import { readFileSync } from "fs";
import { join } from "path";

let cachedDb = null;

export function readDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const dbPath = join(process.cwd(), "db.json");
  cachedDb = JSON.parse(readFileSync(dbPath, "utf-8"));
  return cachedDb;
}

export function stripPassword(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}
