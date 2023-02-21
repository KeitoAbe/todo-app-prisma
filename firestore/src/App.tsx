import React, { useState, useEffect } from "react";
import "./App.css";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
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
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const submit = async () => {
    await addDoc(collection(db, "keitoAbe"), {
      name: text,
      timestamp: serverTimestamp(),
    });
    setText("");
  };
  const db = getFirestore();
  const namesSchema = z.array(z.string());
  const [users, setUsers] = useState<string[]>([]);
  const nameArray: string[] = [];

  useEffect(() => {
    onSnapshot(
      query(collection(db, "keitoAbe"), orderBy("timestamp")),
      (snapshot) => {
        let changes = snapshot.docChanges();
        for (let change of changes) {
          if (change.type === "added") {
            nameArray[change.newIndex] = change.doc.data().name;
          }
          if (change.type === "modified") {
            nameArray[change.oldIndex] = change.doc.data().name;
          }
          if (change.type === "removed") {
            nameArray.splice(change.oldIndex, 1);
          }
        }
        setUsers(namesSchema.parse(nameArray));
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  return (
    <div className="App">
      <input value={text} onChange={handleChange} type="text" />
      <input type="button" onClick={() => submit()} value="追加" />
      {users.map((name: string, index: number) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}
