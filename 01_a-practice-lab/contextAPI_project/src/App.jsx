import React from "react";
import MyComponent from "./components/MyComponents";
import MyProvider from "./context/MycontextProvider";

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
