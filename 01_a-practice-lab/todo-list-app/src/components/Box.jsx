import React from "react";
import Item from "./Item";

const Box = (props) => {
  const items = props.saman.map(() => {
    return <Item />;
  });
  return (
    <>
      <div className="min-w-[90%] mx-4 rounded-md min-h-[500px] border border-gray-400">
        {items}
      </div>
    </>
  );
};

export default Box;
