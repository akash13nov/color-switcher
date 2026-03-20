import React from "react";

const Button = ({ color, setColorData, children }) => {
  function selectorcolor() {
    setColorData(color);
  }
  return (
    <button
      onClick={selectorcolor}
      style={{ backgroundColor: color }}
      className="px-3 py-1.5 rounded-sm text-black font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
