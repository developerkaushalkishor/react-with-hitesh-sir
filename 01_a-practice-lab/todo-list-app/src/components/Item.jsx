import React, { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";

const Item = () => {
  const [done, setDone] = useState(false);
  return (
    <>
      <div className="p-3 text-xl border-b select-none border-gray-300 flex justify-between">
        <span className=" text-slate-500">10:11 AM</span>
        <span
          onClick={() => setDone(!done)}
          className={`${done === true ? "line-through" : ""} cursor-pointer`}
        >
          Item Name
        </span>
        <span className=" cursor-pointer">
          <BsTrash3Fill className="text-red-600" />
        </span>
      </div>
    </>
  );
};

export default Item;
