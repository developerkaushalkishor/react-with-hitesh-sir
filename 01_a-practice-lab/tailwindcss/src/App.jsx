import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  let prodList = ["Apple", "lumo", "phone", "hp"];

  return (
    <>
      <div className="main ">
        <h1 className="bg-green-800 p-5 mb-5 rounded-xl">
          This is Tailwind Css
        </h1>
        {prodList.map((productName, index) => (
          <Product key={index} item={productName} />
        ))}

        <Product item="Apple" />
        <Product item="MacBook" />
        <Product item="iPad" />
        {/* <Blog />
        <Card /> */}
      </div>
    </>
  );
}

export default App;
