import "./App.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  const [user, loading, error] = useAuthState(auth);
  if (loading || error) {
    return <></>;
  }
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
}

export default Auth;
