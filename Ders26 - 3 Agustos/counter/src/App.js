import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  // function arttir() {
  //   setCount(count + 1);
  //   console.log(count);
  //   // count = count + 1;
  // }

  function azalt() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={azalt} className="button1">
        -
      </button>
      <label className="label1">{count}</label>
      <button onClick={() => setCount(count + 1)} className="button1 green">
        +
      </button>
      <Login></Login>
    </div>
  );
}

export default App;
