import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addone = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="count">
        <h1>This is a simple counter {count}</h1>
        <h2>Count is {count}</h2>
        {/* <button onClick={() => setCount(count + 1)}>Click To ADD +1</button> */}
        {/* <button onClick={() => {setCount(count + 1)}}>Click To ADD +1</button> */}
        <button onClick={addone}>Click To ADD +1</button>
      </div>
    </>
  );
}

export default App;
