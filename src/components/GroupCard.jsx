import React from "react";

function GroupCard({ groupName, groupDesc, imgPath }) {
  return (
    <div class="w-full min-w-[340px] rounded-lg border border-solid flex flex-col gap-2 drop-shadow-sm hover:drop-shadow-2xl bg-white hover:scale-110 duration-300">
      <img class="rounded-tl-lg rounded-tr-lg" src={`${imgPath}`} alt="" />
      <div class="p-4">
        <h3 class="font-bold text-xl">{groupName}</h3>
        <p class="mt-2">{groupDesc}</p>
      </div>
    </div>
  );
}

export default GroupCard;
