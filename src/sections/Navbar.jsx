import React from "react";
import { setSideBarShow, setFormNo } from "../Redux/SetBarReducer";
import { useSelector, useDispatch } from "react-redux";
import { getShow } from "../Redux/SetBarReducer";
import { getData } from "../Redux/DataReducer";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(8));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div>
      <nav className="bg-body-color py-6  w-full z-20 relative top-0 left-0 border-b border-gray-200">
        {url === "/" && (
          <button
            onClick={sidebarCall}
            className="absolute top-4 right-4 group md:p-4 p-3 text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white transition-all duration-300 ease-in hover:from-transparent hover:to-transparent hover:bg-red-primary hover:-translate-y-1  hover:text-white"
          >
            <span className={`${showSideBar === "on" ? "hidden" : "inline"}`}>
              Edit
            </span>
            <AiOutlineClose
              className={`text-red-primary text-2xl ${
                showSideBar === "off" ? "hidden" : "block"
              }`}
            />
          </button>
        )}
        <div className="container 2xl:px-0 flex flex-wrap justify-between items-center mx-auto px-5 md:px-12">
          <a href="/" className="flex items-center">
            <img
              src={Data.NavbarDetails.image}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-metal-black">
              {Data.NavbarDetails.logo}
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="md:px-8 px-4 py-2.5 font-medium  m-1 transition-all duration-300 ease-in  text-red-primary rounded-md md:m-2 shadow-white-3 bg-gradient-to-tl from-white to-gray-box bg-white hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
