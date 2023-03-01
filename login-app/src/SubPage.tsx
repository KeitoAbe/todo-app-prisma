import "./App.css";
import { Link } from "react-router-dom";

function SubPage() {
  return (
    <div>
      <h1>サブページ</h1>
      <Link to="/">メインページ</Link>
    </div>
  );
}

export default SubPage;
