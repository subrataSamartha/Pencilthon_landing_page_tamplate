import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import SocialButton from "../components/SocialButton";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";

function CommunityOwnerDetail() {
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    // console.log(Data.Community);
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(2));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div onClick={sidebarCall}>
      <div className="max-w-[1280px] mx-auto bg-myGrey flex flex-col md:flex-row justify-between items-center p-8 md:p-24">
        <div className="md:w-[40%]">
          <div className="p-8 bg-white rounded">
            <img className="rounded" src={Data.Community.image} alt="image" />
          </div>
        </div>
        <div className="md:w-[50%] mt-6">
          <div className="flex flex-col gap-6">
            <div>
              <Heading1
                text={Data.Community.heading}
                size="4xl"
                weight="bold"
              />
            </div>
            <div className="opacitu-80">
              <Paragraph text={Data.Community.paragraph} />
            </div>
            {/* <!-- Social Icons --> */}
            <div className="flex flex-row justify-start gap-4 mt-6">
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
