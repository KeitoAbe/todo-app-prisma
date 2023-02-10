import { useState, useEffect } from "react";
import "./App.css";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const nameArray = querySnapshot.docs.map((doc) => doc.data().name);
      setUsers(nameArray);
    })();
  }, []);

  return (
    <div className="App">
      {users.map((user: string) => {
        return <p>{user}</p>;
      })}
    </div>
  );
}

export default App;
