import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);
  // let count = 0;

  const addValue = () => {
    // count = count + 1;
    if (count === 20) {
      count;
    } else {
      setCounter(count + 1);
    }
    // console.log(count, Math.random());
  };
  const removeValue = () => {
    if (count === 0) {
      count;
    } else {
      setCounter(count - 1);
    }
  };
  return (
    <>
      <h1>This is counter {count}</h1>
      <button onClick={addValue}>Add Counter {count}</button>
      <button onClick={removeValue}>Remove Counter {count}</button>
      <p>Counter is {count}</p>
    </>
  );
}

export default App;
