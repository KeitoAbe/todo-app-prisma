import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import useSWR from "swr";
import { z } from "zod";
import { auth } from "../firebase";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <GetName /> : <SignInButton />}</div>;
}

export default App;

function SignInButton() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <button onClick={() => signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
}

function GetName() {
  const db = getFirestore();
  const namesSchema = z.array(z.string());
  const fetcher = async () => {
    const querySnapshot = await getDocs(collection(db, "keitoAbe"));
    const nameArray = querySnapshot.docs.map((doc) => doc.data().name);
    return namesSchema.parse(nameArray);
  };
  const { data, error, isLoading } = useSWR("users", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;
  return (
    <div className="App">
      {data.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}
