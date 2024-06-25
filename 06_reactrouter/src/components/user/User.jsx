import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex justify-center align-middle text-2xl bg-gray-500 m-5 p-5 border-4 border-green-400 rounded-2xl text-white">
      Hello: <span className="uppercase font-bold pl-2">{userid}</span>{" "}
    </div>
  );
};

export default User;
