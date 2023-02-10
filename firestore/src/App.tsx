import "./App.css";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import useSWR from "swr";

function App() {
  const fetcher = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const nameArray = querySnapshot.docs.map((doc) => doc.data().name);
    return nameArray;
  };

  const { data, error, isLoading } = useSWR("users", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <div className="App">
      {data.map((name: string, index: number) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default App;
