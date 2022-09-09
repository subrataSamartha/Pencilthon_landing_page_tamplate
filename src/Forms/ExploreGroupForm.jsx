import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AiFillDelete } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
const initState = {
  groupName: "New Group 1",
  groupDesc: "Add a Desc for Group",
  image: "./images/person-image.jpg",
};

const ExploreGroupForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [img, setImg] = useState(Data.Community.image);

  const [todo, setTodo] = useState(initState);

  const [info, setInfo] = useState([...Data.ExploreGroup]);

  const changeInfo = (e) => {
    setTodo({ ...todo, [e.name]: e.value });
  };

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImg(reader.result);
      setTodo({ ...todo, [e.target.name]: reader.result });
    };
  }

  function deleteTodo(id) {
    let t = info;
    const newContactList = t.filter((contact) => {
      return contact.id !== id;
    });

    setInfo(newContactList);
    dispatch(
      setData({
        section: "ExploreGroup",
        data: newContactList,
      })
    );
  }

  const submitData = () => {
    let t = info;
    t = [...t, { id: uuidv4(), ...todo }];
    setTodo(initState);
    setInfo([...t]);
    // console.log("info", info);

    dispatch(
      setData({
        section: "ExploreGroup",
        data: t,
      })
    );
    sidebarCall();
  };
  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(1));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold py-5">Explore Groups</h1>
      <div className="mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 h-36 rounded-full border-8 border-body-color shadow-lg relative flex items-center justify-center overflow-hidden">
            <img
              className="h-36 w-36 rounded-3xl bg-cover"
              src={img}
              alt="avatar"
            />
            <div className="absolute top-11">
              <input
                onChange={captureImage}
                type="file"
                id="avatarInput"
                name="image"
                className="hidden"
              />
            </div>
          </div>
          <label
            htmlFor="avatarInput"
            className="my-5 text-sm font-medium inline-block cursor-pointer px-4 py-2 border border-rose-500 bg-white text-red-primary rounded-sm mt-2"
          >
            Upload
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="Heading"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Heading
        </label>
        <input
          type="text"
          id="Heading"
          name="groupName"
          value={todo.groupName}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Paragraph"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Paragraph
        </label>
        <input
          type="text"
          id="Paragrapgh"
          name="groupDesc"
          value={todo.groupDesc}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button
        onClick={submitData}
        className="px-8 py-2 shadow-sm rounded-sm bg-gradient-to-tr from-rose-500 to-rose-700 text-white"
      >
        Add
      </button>

      {info.map((contact) => {
        return (
          <div
            className="flex items-center justify-between pt-2"
            key={contact.id}
          >
            <p className="font-sans font-medium text-gray-700">
              {contact.groupName}
            </p>
            <span
              className="cursor-pointer"
              onClick={() => deleteTodo(contact.id)}
            >
              <AiFillDelete />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ExploreGroupForm;
