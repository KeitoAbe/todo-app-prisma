import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  return (
    <div className="App">
      <label>
        State aの値:
        <input
          value={a}
          type="number"
          onChange={(e) => setA(parseInt(e.target.value))}
        />
      </label>
      <label>
        State bの値:
        <input
          value={b}
          type="number"
          onChange={(e) => setB(parseInt(e.target.value))}
        />
      </label>
      <ComponentA a={a} />
      <ComponentB b={b} />
    </div>
  );
}

export default App;
