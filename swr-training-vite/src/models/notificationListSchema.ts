import { z } from "zod";
import { notificationSchema } from "./notificationSchema";

export const notificationListSchema = z.object({
  items: z.array(notificationSchema),
  pagination: z.object({
    per_page: z.number(),
    next: z.number().nullable(),
  }),
});

export type NotificationList = z.infer<typeof notificationListSchema>;
