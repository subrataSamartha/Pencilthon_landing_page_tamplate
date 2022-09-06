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
    <div className="w-full relative">
      <button onClick={sidebarCall} className="absolute top-4 right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white  ">Edit</button>

      <div className="w-full flex flex-col md:flex-row justify-evenly items-center p-8 md:p-24">
        <div className="md:basis-2/6 w-full transition-transform duration-200 ease-in hover:-translate-y-1">
          <div className="p-4 shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box rounded-md ">
            <img className="rounded" src={Data.Community.image} alt="image" />
          </div>
        </div>
        <div className="md:basis-2/5 w-full md:mt-6 mt-3">
          <div className="flex flex-col gap-6">
            <div>
              <Heading1
                text={Data.Community.heading}
                size="4xl"
                weight="bold"
              />
            </div>
            <div className="text-stone-800">
              <Paragraph text={Data.Community.paragraph} />
            </div>
            {/* <!-- Social Icons --> */}
            <div className="flex flex-row flex-wrap justify-start gap-4 md:mt-6 mt-0">
              {/* <!-- twitter icon --> */}
              <button  className='group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary '><FaFacebookF className='text-red-primary group-hover:text-white text-2xl font-semibold'/></button>
              {/* <!-- instagram icon --> */}
              <button  className='group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary '><GrTwitter className='text-red-primary group-hover:text-white text-2xl font-semibold'/></button>

              {/* <!-- facebook icon --> */}
              <button  className='group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary '><GrInstagram className='text-red-primary group-hover:text-white text-2xl font-semibold'/></button>

              {/* <!-- github icon --> */}
              <button  className='group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary '><FaLinkedinIn className='text-red-primary group-hover:text-white text-2xl font-semibold'/></button>

              {/* <!-- linkedin icon --> */}
              <button  className='group md:p-4 p-3 rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary '><AiFillGithub className='text-red-primary group-hover:text-white text-2xl font-semibold'/></button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityOwnerDetail;
