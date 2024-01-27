import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let obj = {
    name: "Kaushal",
    age: 22,
  };
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="p-4 mb-4 text-center bg-green-400 text-black rounded-xl ">
        Tailwind Test
      </h1>
      <Card name="Sonali" btnText="Click Me" />
      <Card name="Riya" />
      <Card name="Ram" btnText="VISIT Me" />
    </>
  );
}

export default App;
