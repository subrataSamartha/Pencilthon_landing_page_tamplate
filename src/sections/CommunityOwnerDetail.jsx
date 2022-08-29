import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import SocialButton from "../components/SocialButton";

function CommunityOwnerDetail() {
  return (
    <div>
      <div class="max-w-[1280px] mx-auto bg-myGrey flex flex-col md:flex-row justify-between items-center p-8 md:p-24">
        <div class=" md:w-[40%]">
          <div class="p-8 bg-white rounded">
            <img class="rounded" src="../images/person-image.jpg" alt="" />
          </div>
        </div>
        <div class="md:w-[50%] mt-6">
          <div class="flex flex-col gap-6">
            <div>
              <Heading1 text="I’m Hitesh Choudhary, Teacher by ♥️ and programmer by profession." />
            </div>
            <div className="opacitu-80">
              <Paragraph text="I write code and I make youtube videos I like to make videos related to code and tech in my free time. I also lead a few tech teams in startups, help in hiring talent for companies. I am also on a part time traveller, with 31 countries checked off so far!" />
            </div>
            {/* <!-- Social Icons --> */}
            <div class="flex flex-row justify-start gap-4 mt-6">
              {/* <!-- twitter icon --> */}
              <SocialButton type="twitter" />
              {/* <!-- instagram icon --> */}
              <SocialButton type="instagram" />
              {/* <!-- facebook icon --> */}
              <SocialButton type="facebook" />
              {/* <!-- github icon --> */}
              <SocialButton type="github" />
              {/* <!-- linkedin icon --> */}
              <SocialButton type="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityOwnerDetail;
