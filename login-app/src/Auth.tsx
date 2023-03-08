import { useState } from "react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Auth() {
  const [isLogin, setIsLogin] = useState<null | boolean>(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setIsLogin(!!user);
  });
  if (isLogin === null) {
    return <></>;
  }
  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
}

export default Auth;
