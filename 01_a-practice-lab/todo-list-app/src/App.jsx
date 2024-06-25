import React, { useState } from "react";
import Input from "./components/Input";
import Box from "./components/Box";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (items) => {
    console.log(items);
  };
  return (
    <>
      <div className="bg-black h-screen p-3">
        <div className="max-w-[750px] min-h-[700px] shadow-2xl mx-auto bg-white rounded">
          <Input/>
          <Input handler={addTodoHandler} />
          <Box saman= {todos} />
        </div>
      </div>
    </>
  );
};

export default App;
