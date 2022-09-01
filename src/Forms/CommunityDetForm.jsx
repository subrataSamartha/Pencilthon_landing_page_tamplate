import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData, setData } from "../Redux/DataReducer";
const CommunityDetForm = () => {
  const dispatch = useDispatch();
  const Data = useSelector(getData);
  const [info, setInfo] = useState({
    heading: Data.Community.heading,
    paragraph: Data.Community.paragraph,
  });

  const changeInfo = (e) => {
    setInfo({ ...info, [e.name]: e.value });
  };
  const submitData =()=>{
    dispatch(setData({
        section:"Community",
        data : info
       }));
 }
  return (
    <div>
      <h1 className="text-xl font-bold py-5">Community Details</h1>
      <div className="mb-6">
        <label
          for="Heading"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Heading
        </label>
        <input
          type="text"
          id="Heading"
          name="heading"
          value={info.heading}
          onChange={(e)=>changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          for="Paragraph"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Paragraph
        </label>
        <input
          type="text"
          id="Paragrapgh"
          name="paragraph"
          value={info.paragraph}
          onChange={(e)=>changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button onClick={submitData} className="px-8 py-2 shadow-sm rounded-sm bg-gradient-to-tr from-rose-500 to-rose-700 text-white">
        Done
      </button>
    </div>
  );
};

export default CommunityDetForm;
