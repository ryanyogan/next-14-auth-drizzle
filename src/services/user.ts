import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.email, email)).execute();
}

export async function getUserById(id: string) {
  return db.select().from(users).where(eq(users.id, id)).limit(1).execute();
}
