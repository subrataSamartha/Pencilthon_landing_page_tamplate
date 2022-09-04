import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupCard from "../components/GroupCard";
import { getData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";

function ExploreGroup() {
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [groupCards,setGroupCards] = useState([]);
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
    console.log(Data.ExploreGroup);
  }, [Data])
  
  return (
    <div onClick={sidebarCall}>
      <div class="p-8 md:p-24 max-w-[1280px] mx-auto">
        <h1 class="text-4xl font-bold">Explore Groups</h1>
        {/* <!-- Group cards --> */}
        <div class="mt-12 grid grid-cols-1 mx-auto md:grid-cols-3 gap-8">
          {
            groupCards.map((curElem)=>{
              return (
                <GroupCard
                groupName={curElem.groupName}
                groupDesc={curElem.groupDesc}
                imgPath={curElem.image}
              />
              )
            })
          }
          {/* <!-- card-1 --> */}
         
          {/* <!-- card-2 --> */}
      
          {/* <!-- card-3 --> */}
      
          {/* <!-- card-4 --> */}
       
          {/* <!-- card-5 --> */}
       
        </div>
      </div>
    </div>
  );
}

export default ExploreGroup;
