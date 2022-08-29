import React from "react";

function Button({ text }) {
  return (
    <div>
      <button class="px-4 py-2 bg-myPrimary text-white rounded mt-2">
        {text}
      </button>
    </div>
  );
}

export default Button;
