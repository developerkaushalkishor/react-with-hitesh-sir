import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue("New Value")}>Change Value</button>
    </div>
  );
};

export default MyComponent;
