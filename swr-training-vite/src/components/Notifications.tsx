import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications/fetchNotifications";
import { NotificationSchema } from "../models/notificationSchema";
import { Link } from "react-router-dom";

export default function Notifications() {
  // TODO: SWRを使ってお知らせ一覧を取得する
  // TODO: SWRを使ってページネーションを実装する
  const [next, setNext] = useState<number | null>(null);
  const [items, setItems] = useState<NotificationSchema[]>([]);

  const { isLoading, error, data, isFetching } = useQuery(
    ["notifications", next],
    () => fetchNotifications(next),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (data) {
      setItems((prevItems) => [...prevItems, ...data.items]);
    }
  }, [data]);

  const handleClick = () => {
    setNext(data?.pagination.next ?? null);
  };

  if (isLoading && !isFetching) return "Loading...";
  if (error) return "An error has occurred.";

  return (
    <>
      <h1>お知らせ一覧</h1>
      {/* TODO: 取得したお知らせ一覧をリスト表示する */}
      {/* TODO: リスト表示されたお知らせを押下したら、該当のお知らせの詳細ページへ遷移させる */}
      {/* TODO: まだ取得していないお知らせが残っているなら「続きを読み込む」ボタンを表示する */}
      {items.map((item: NotificationSchema) => (
        <Link to={`/notifications/${item.id}`}>
          <p key={item.id}>{item.title}</p>
        </Link>
      ))}
      {isFetching && <p>Loading...</p>}
      {!isFetching && data?.pagination.next && (
        <button onClick={handleClick}>続きを読み込む</button>
      )}
    </>
  );
}
