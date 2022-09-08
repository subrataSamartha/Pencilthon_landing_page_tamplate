import React from "react";

function GroupCard({ key, groupName, groupDesc, imgPath }) {
  //   console.log(key, groupName);
  return (
    <div className="group w-full p-4 shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box  rounded-2xl border border-solid flex flex-col gap-2 drop-shadow-sm hover:drop-shadow-2xl ">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-52 rounded-tl-lg rounded-tr-lg transition-transform duration-300 ease-in group-hover:scale-110"
          src={`${imgPath}`}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-xl text-metal-black">{groupName}</h3>
        <p className="mt-2 text-para-black">{groupDesc}</p>
      </div>
    </div>
  );
}

export default GroupCard;
