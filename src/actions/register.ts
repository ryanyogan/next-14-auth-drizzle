"use server";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/services/user";
import { hash } from "bcryptjs";
import { v4 } from "uuid";
import { z } from "zod";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email already in use!" };
  }

  const id = v4();
  await db.insert(users).values({
    id,
    name,
    email,
    password: hashedPassword,
  });

  return { success: "Email sent!" };
}
