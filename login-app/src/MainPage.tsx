import "./App.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>メインページ</h1>
      <Link to="/sub">サブページ</Link>
    </div>
  );
}

export default MainPage;
