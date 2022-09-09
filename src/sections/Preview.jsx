import React from "react";
import FAQ from "../components/FAQ";
import CommunityDescription from "./CommunityDescription";
import CommunityLiveFeed from "./CommunityLiveFeed";
import CommunityOwnerDetail from "./CommunityOwnerDetail";
import ExploreGroup from "./ExploreGroup";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import TextHighlight from "./TextHighlight";

const Preview = () => {
  return (
    <div className="bg-body-color">
      <Navbar />
      <HeroSection />
      <TextHighlight />
      <CommunityDescription />
      <CommunityOwnerDetail />
      <ExploreGroup />
      <CommunityLiveFeed />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Preview;
