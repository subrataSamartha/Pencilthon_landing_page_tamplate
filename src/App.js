import SideBar from "./components/SideBar";
import CommunityDescription from "./sections/CommunityDescription";
import CommunityLiveFeed from "./sections/CommunityLiveFeed";
import CommunityOwnerDetail from "./sections/CommunityOwnerDetail";
import ExploreGroup from "./sections/ExploreGroup";
import HeroSection from "./sections/HeroSection";
import Testimonial from "./sections/Testimonial";
import TextHighlight from "./sections/TextHighlight";

function App() {
  return (
    <div className="bg-body-color">
      <SideBar />
      <HeroSection />
      <TextHighlight />
      <CommunityDescription />
      <CommunityOwnerDetail />
      <ExploreGroup />
      <Testimonial/>
      {/* <CommunityLiveFeed /> */}
    </div>
  );
}

export default App;
