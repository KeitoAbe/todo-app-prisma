import "./App.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Link } from "react-router-dom";

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading && error) {
    return <></>;
  }
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div>
        <h1>メインページ</h1>
        <Link to="/sub">サブページ</Link>
      </div>
    );
  }
}

export default App;
