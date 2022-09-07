import React from "react";
import CommunityDescription from "./CommunityDescription";
import CommunityLiveFeed from "./CommunityLiveFeed";
import CommunityOwnerDetail from "./CommunityOwnerDetail";
import ExploreGroup from "./ExploreGroup";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import TextHighlight from "./TextHighlight";

const Preview = () => {
  return (
    <div className="bg-body-color">
      <HeroSection />
      <TextHighlight />
      <CommunityDescription />
      <CommunityOwnerDetail />
      <ExploreGroup />
      <Testimonial />
      <CommunityLiveFeed />
    </div>
  );
};

export default Preview;
