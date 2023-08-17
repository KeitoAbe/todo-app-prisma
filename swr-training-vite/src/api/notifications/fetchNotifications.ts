import axios from "axios";
import {
  NotificationList,
  notificationListSchema,
} from "../../models/notificationListSchema";

export const fetchNotifications = async (next: number | null) => {
  const queryParams = new URLSearchParams();
  next && queryParams.append("next", String(next));
  const queryString = queryParams.toString();

  const { data } = await axios.request<NotificationList>({
    url: "/notifications?" + queryString,
    method: "GET",
  });
  return notificationListSchema.parse(data);
};
