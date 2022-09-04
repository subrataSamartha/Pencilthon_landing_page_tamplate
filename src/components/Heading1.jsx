import React from "react";

function Heading1({ text, size, weight }) {
  return (
    <div>
      <h1 className={`text-${size} font-${weight}`}>{text}</h1>
    </div>
  );
}

export default Heading1;
