import axios from "axios";
import {
  NotificationSchema,
  notificationSchema,
} from "../../models/notificationSchema";

export const fetchNotification = async (id: number) => {
  const { data } = await axios.request<NotificationSchema>({
    url: `/notifications/${id}`,
    method: "GET",
  });
  return notificationSchema.parse(data);
};
