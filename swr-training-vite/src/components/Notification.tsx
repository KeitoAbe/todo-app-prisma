import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchNotification } from "../api/notifications/fetchNotification";
import { NotificationSchema } from "../models/notificationSchema";

export default function Notification() {
  // URLパラメーターを取得
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: notification,
  } = useQuery<NotificationSchema>(["notification", id], () =>
    fetchNotification(Number(id))
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred.";

  return (
    <>
      <h1>お知らせ詳細</h1>
      <p>タイトル: {notification?.title}</p>
      <p>本文: {notification?.description}</p>
    </>
  );
}
