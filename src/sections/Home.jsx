import React from "react";
import SideBar from "../components/SideBar";
import CommunityDescription from "./CommunityDescription";
import CommunityLiveFeed from "./CommunityLiveFeed";
import CommunityOwnerDetail from "./CommunityOwnerDetail";
import ExploreGroup from "./ExploreGroup";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import TextHighlight from "./TextHighlight";

const Home = () => {
  return (
    <div className="bg-body-color">
      <SideBar />
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

export default Home;
