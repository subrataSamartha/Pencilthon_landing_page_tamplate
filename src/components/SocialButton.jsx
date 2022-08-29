import React from "react";

function SocialButton({ type }) {
  return (
    <div>
      <div className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full hover:bg-myPrimary hover:text-white">
        <i className={`fa-brands fa-${type} text-[24px]`}></i>
      </div>
    </div>
  );
}

export default SocialButton;
