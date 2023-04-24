import { useRef } from "react";
import IAmACat from "./components/IAmACat";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <IAmACat ref={ref} />
      <button onClick={handleClick}>最上部に戻る</button>
    </div>
  );
}

export default App;
