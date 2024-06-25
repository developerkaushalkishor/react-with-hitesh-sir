import React, { useRef } from "react";
import { IoAddOutline } from "react-icons/io5";
import Box from "./Box";

const Input = (props) => {
  const inputBox = useRef()
  
  return (
    <>
      <div className="p-3 flex justify-around ">
        <input
          className="p-3 border border-sky-400 rounded-xl text-gray-600 focus:outline-none w-[90%]"
          placeholder="Enter Your Task Here!"
          type="text"
          ref={inputBox}
        />
        <div className="w-[50px] h-[50px] mx-1 bg-orange-400 grid place-items-center text-3xl text-white rounded-[50%]" onClick={()=> props.handler(inputBox.current.value)}>
          <IoAddOutline />
        </div>
      </div>
      <Box />
    </>
  );
};

export default Input;
