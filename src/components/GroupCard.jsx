import React from "react";

function GroupCard({ groupName, groupDesc, imgPath }) {
  return (
    <div className="w-full min-w-[340px] rounded-lg border border-solid flex flex-col gap-2 drop-shadow-sm hover:drop-shadow-2xl bg-white hover:scale-110 duration-300">
      <img
        className="h-44  rounded-tl-lg rounded-tr-lg"
        src={`${imgPath}`}
        alt=""
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{groupName}</h3>
        <p className="mt-2">{groupDesc}</p>
      </div>
    </div>
  );
}

export default GroupCard;
