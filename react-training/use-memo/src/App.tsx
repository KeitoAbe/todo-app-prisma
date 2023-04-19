import CalculationComponent from "./components/CalculationComponent";
import ValueComponent from "./components/ValueComponent";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [calculation, setCalculation] = useState(0);
  return (
    <div className="App">
      <label>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
        />
        <ValueComponent value={value} />
      </label>
      <label>
        <input
          type="number"
          value={calculation}
          onChange={(e) => {
            setCalculation(parseInt(e.target.value));
          }}
        />
        <CalculationComponent value={calculation} />
      </label>
    </div>
  );
}

export default App;
