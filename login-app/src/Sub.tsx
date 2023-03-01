import "./App.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Link } from "react-router-dom";

function Sub() {
  const [user, loading, error] = useAuthState(auth);
  if (loading && error) {
    return <></>;
  }
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div>
        <h1>サブページ</h1>
        <Link to="/">メインページ</Link>
      </div>
    );
  }
}

export default Sub;
