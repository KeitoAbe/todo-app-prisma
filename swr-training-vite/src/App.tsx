import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>ホーム</h1>
      <p>
        <Link to="/notifications">お知らせ一覧</Link>
      </p>
      <p>
        <Link to="/user">ユーザー詳細</Link>
      </p>
    </>
  );
}

export default App;
