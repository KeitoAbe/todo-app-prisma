import { z } from "zod";

export const notificationSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});

export type NotificationSchema = z.infer<typeof notificationSchema>;
