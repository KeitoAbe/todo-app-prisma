import { useQuery } from "react-query";
import { fetchUser } from "../api/user/fetchUser";

export default function User() {
  // TODO: SWRでユーザー情報を取得する
  const { isLoading, error, data: user } = useQuery(["user"], fetchUser);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred.";

  return (
    <>
      {/* TODO: 取得したユーザー情報を表示する */}
      <h1>ユーザー詳細</h1>
      <p>名前: {user?.name}</p>
      <p>メールアドレス: {user?.email}</p>
      <p>所属ユニット: {user?.unit}</p>
    </>
  );
}
