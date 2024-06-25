import { useState } from "react";
import "./App.css";
import Colorbutton from "./components/Colorbutton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Colorbutton />
      </div>
    </>
  );
}

export default App;
