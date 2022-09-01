import React from "react";
import GroupCard from "../components/GroupCard";

function ExploreGroup() {
  return (
    <div class="p-8 md:p-24 max-w-[1280px] mx-auto">
      <h1 class="text-4xl font-bold">Explore Groups</h1>
      {/* <!-- Group cards --> */}
      <div class="mt-12 grid grid-cols-1 mx-auto md:grid-cols-3 gap-8">
        {/* <!-- card-1 --> */}
        <GroupCard
          groupName="Javascript Community"
          groupDesc="Learn and help from each other. It doesn't matter from where you are
          learning"
          imgPath="./images/1.jpg"
        />
        {/* <!-- card-2 --> */}
        <GroupCard
          groupName="Javascript Community"
          groupDesc="Learn and help from each other. It doesn't matter from where you are
          learning"
          imgPath="./images/2.jpg"
        />
        {/* <!-- card-3 --> */}
        <GroupCard
          groupName="Javascript Community"
          groupDesc="Learn and help from each other. It doesn't matter from where you are
          learning"
          imgPath="./images/3.jpg"
        />
        {/* <!-- card-4 --> */}
        <GroupCard
          groupName="Javascript Community"
          groupDesc="Learn and help from each other. It doesn't matter from where you are
          learning"
          imgPath="./images/4.jpg"
        />
        {/* <!-- card-5 --> */}
        <GroupCard
          groupName="Javascript Community"
          groupDesc="Learn and help from each other. It doesn't matter from where you are
          learning"
          imgPath="./images/5.jpg"
        />
      </div>
    </div>
  );
}

export default ExploreGroup;
