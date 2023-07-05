import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState<number>(0);
  
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex justify-center h-10">
        <label
          htmlFor="check"
          className={`block group cursor-pointer rounded-full ${
            state === 0 ? "bg-gray-300" : "bg-green-500 transition-all duration-500 ease-in-out"
          } relative w-20 h-10 peer-checked:bg-green-500`}
        >
          <input
            value={state}
            type="checkbox"
            id="check"
            onChange={() => setState(state === 0 ? 1 : 0)}
            className="sr-only peer"
          />
          <span className="w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
