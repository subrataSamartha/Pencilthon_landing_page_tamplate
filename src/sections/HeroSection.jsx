import React from "react";
import Button from "../components/Button";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";

function HeroSection() {
  return (
    <div className="max-w-[1280px] mx-auto px-24 py-56 bg-hero-img">
      <div className="max-w-[540px] flex flex-col gap-4 text-white">
        <Heading1 text="Full Stack Coder Community" />
        <Paragraph text="nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris" />
        <div className="mt-2">
          <Button text="Join Community" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
