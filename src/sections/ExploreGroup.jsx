import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupCard from "../components/GroupCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

function ExploreGroup() {
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [groupCards, setGroupCards] = useState([]);
  const dispatch = useDispatch();

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(3));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  useEffect(() => {
    setGroupCards([...Data.ExploreGroup]);
  }, [Data]);

  return (
    <div className="w-full relative">
      <button onClick={sidebarCall} className="absolute top-4 right-4 md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-white-3 bg-gradient-to-tl bg-gradient from-white to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white  ">Edit</button>

      <div className="p-8 md:p-24 max-w-[1280px] mx-auto">
        <h1 className="text-4xl font-bold">Explore Groups</h1>
        {/* <!-- Group cards --> */}
        <div className="mt-12 grid grid-cols-1 mx-auto md:grid-cols-3 gap-8">
          {groupCards.map((curElem) => {
            return (
              <GroupCard
                groupName={curElem.groupName}
                groupDesc={curElem.groupDesc}
                imgPath={curElem.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreGroup;
