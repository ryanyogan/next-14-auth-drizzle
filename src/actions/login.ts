"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  return { success: "Email sent!" };
}
