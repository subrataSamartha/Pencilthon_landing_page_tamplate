import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className="md:px-5 md:py-3 p-3 text-red-primary font-semibold rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-md bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:to-transparent hover:text-white hover:-translate-y-1 hover:bg-red-primary ">
        {text}
      </button>
    </div>
  );
}

export default Button;
