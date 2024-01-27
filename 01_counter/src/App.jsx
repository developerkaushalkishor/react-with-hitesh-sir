import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);
  let [num, setNum] = useState(1);

  const addNumVal = () => {
    // in this  case the useState will add the number only 1 time and the prevCount that will add the number 3 time
    // // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    // INTERVIEW QUESTION

    setNum((prevCount) => prevCount + 1);
    setNum((prevCount) => prevCount + 1);
    setNum((prevCount) => prevCount + 1);
  };

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
      <p onClick={addNumVal}>Number is {num}</p>
    </>
  );
}

export default App;
