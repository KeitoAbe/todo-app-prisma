import { useState, useCallback } from "react";
import EventComponent from "./components/EventComponent";

function App() {
  const [count, setCount] = useState(0);
  const [hoge, setHoge] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  return (
    <div className="App">
      countの値：{count}
      <EventComponent onClick={handleClick} />
      hogeの値：{hoge}
      <div>
        <button
          onClick={() => {
            setHoge(hoge + 1);
          }}
        >
          hogeを+1するボタン
        </button>
      </div>
    </div>
  );
}

export default App;
