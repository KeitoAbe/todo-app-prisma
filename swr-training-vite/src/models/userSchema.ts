import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  unit: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
