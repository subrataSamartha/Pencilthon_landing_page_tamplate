import React from "react";

function CommunityLiveFeed() {
  return (
    <div class="max-w-[1280px] p-8 md:p-24 mx-auto flex flex-col md:flex-row bg-mySecondary items-center">
      <div class="w-full md:w-[50%]">
        <h1 class="text-white text-4xl font-bold">Community Live Feed</h1>
      </div>
      <div class="w-full md:w-[50%] mt-12 md:mt-0">
        <embed
          height="400px"
          width="100%"
          src="https://embed.pensil.in/group/6092210f6b4e221d682a8a72/feed/61d5f19b76ba16db0c7e7de0"
          type="text/html"
        ></embed>
      </div>
    </div>
  );
}

export default CommunityLiveFeed;
