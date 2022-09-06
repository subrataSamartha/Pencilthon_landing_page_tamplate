import React from "react";
import Heading1 from "../components/Heading1";

function CommunityDescription() {
  return (
    <div className="w-full shadow-lg bg-gradient-to-br from-gray-box to-white mx-auto flex flex-col md:flex-row justify-between items-start p-8 md:px-24 md:py-24  gap-4">
      <div className=" ">
        <div className="flex gap-4 items-start text-2xl">
          <Heading1 text="👋" size="2xl" weight="bold" />
          <div className="flex flex-col text-xl font-medium">
            <Heading1 text="Welcome to " size="2xl" weight="bold" />
            <Heading1 text="Coders community" size="2xl" weight="bold" />
          </div>
        </div>
      </div>
      <div className="pl-12 text-stone-800 md:pl-0 md:w-[50%]">
        <p>
          Welcome to coder community. You might be learning from any place,
          company or resource, we are here to help you. Post any of your doubt
          and there are other fellow coders along with our team to solve your
          doubts.
        </p>
      </div>
    </div>
  );
}

export default CommunityDescription;
