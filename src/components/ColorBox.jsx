import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      className="w-[300px] h-[300px] m-auto flex rounded-xl flex items-center justify-center text-white  text-2xl border-yellow-50 border-2 "
      style={{
        backgroundColor: color,
      }}
    >
      {color.toUpperCase()}
    </div>
  );
};

export default ColorBox;
