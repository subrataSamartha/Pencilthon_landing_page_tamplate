import React from "react";
import SideBar from "../components/SideBar";
import CommunityDescription from "./CommunityDescription";
import CommunityLiveFeed from "./CommunityLiveFeed";
import CommunityOwnerDetail from "./CommunityOwnerDetail";
import ExploreGroup from "./ExploreGroup";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import TextHighlight from "./TextHighlight";
import { AiOutlineClose } from "react-icons/ai";
import FAQ from "../components/FAQ";
import AdminAction from "./AdminAction";
const Home = () => {
  return (
    <div className="bg-body-color ">
      <SideBar />
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
      <AdminAction />
    </div>
  );
};

export default Home;
