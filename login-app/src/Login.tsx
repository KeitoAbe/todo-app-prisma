import { auth } from "../firebase";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  if (loading || error) {
    return <></>;
  }
  if (user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <button onClick={() => signInWithGoogle()}>
      <p>Googleでサインイン</p>
    </button>
  );
}

export default Login;
