import { useQuery } from "react-query";
import styles from "./Header.module.css";
import { fetchUser } from "../api/user/fetchUser";

export default function Header() {
  const { data: user } = useQuery(["user"], fetchUser);
  return (
    <div className={styles.container}>
      <p>React Query Training</p>
      {/* TODO: ユーザーネームをAPIで取得して表示する */}
      <p>{user?.name}</p>
    </div>
  );
}
