import React from "react";
import Heading1 from "../components/Heading1";
import Paragraph from "../components/Paragraph";
import SocialButton from "../components/SocialButton";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {GrTwitter} from 'react-icons/gr';
import {GrInstagram} from 'react-icons/gr';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
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
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center p-8 md:p-24">
        <div className="md:w-[40%]">
          <div className="p-8 bg-white rounded">
            <img className="rounded" src={Data.Community.image} alt="image" />
          </div>
        </div>
        <div className="md:w-[50%] md:mt-6 mt-3">
          <div className="flex flex-col gap-6">
            <div>
              <Heading1
                text={Data.Community.heading}
                size="4xl"
                weight="bold"
              />
            </div>
            <div className="">
              <Paragraph text={Data.Community.paragraph} />
            </div>
            {/* <!-- Social Icons --> */}
            <div className="flex flex-row flex-wrap justify-start gap-4 md:mt-6 mt-0">
              {/* <!-- twitter icon --> */}
              <button  className='md:p-4 p-3 rounded-md md:m-2 m-1 shadow-white-3 bg-gradient-to-tl from-white to-gray-box '><FaFacebookF className='text-red-primary text-2xl font-semibold'/></button>
              {/* <!-- instagram icon --> */}
              <button  className='md:p-4 p-3 rounded-md md:m-2 m-1 shadow-white-3 bg-gradient-to-tl from-white to-gray-box '><GrTwitter className='text-red-primary text-2xl font-semibold'/></button>

              {/* <!-- facebook icon --> */}
              <button  className='md:p-4 p-3 rounded-md md:m-2 m-1 shadow-white-3 bg-gradient-to-tl from-white to-gray-box '><GrInstagram className='text-red-primary text-2xl font-semibold'/></button>

              {/* <!-- github icon --> */}
              <button  className='md:p-4 p-3 rounded-md md:m-2 m-1 shadow-white-3 bg-gradient-to-tl from-white to-gray-box '><FaLinkedinIn className='text-red-primary text-2xl font-semibold'/></button>

              {/* <!-- linkedin icon --> */}
              <button  className='md:p-4 p-3 rounded-md md:m-2 m-1 shadow-white-3 bg-gradient-to-tl from-white to-gray-box '><AiFillGithub className='text-red-primary text-2xl font-semibold'/></button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityOwnerDetail;
