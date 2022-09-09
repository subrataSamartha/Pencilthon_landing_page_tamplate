import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AiFillDelete } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
const initState = {
  name: "Enter Name",
  desc: "Add a Desc for Group",
  image: "./images/person-image.jpg",
  course: "Web App Development",
  rating: 5,
  opc: "0",
};

const TestimonialForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);
  const [img, setImg] = useState(Data.Community.image);

  const [todo, setTodo] = useState(initState);

  const [info, setInfo] = useState([...Data.Testimonials]);

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

    var newContactList = t.filter((contact) => {
      return contact.id !== id;
    });
    // if (newContactList.length !== 0) {
    //   let temp = { ...newContactList[0] };
    //   temp = { ...temp, ["opc"]: "100" };
    //   newContactList[0] = temp;
    // }
    var temp = newContactList.map((curElem, ind) => {
      if (ind == 0) {
        return { ...curElem, ["opc"]: "100" };
      }
      return { ...curElem };
    });
    console.log("ondelete", temp);
    setInfo([...temp]);
    dispatch(
      setData({
        section: "Testimonials",
        data: temp,
      })
    );
  }

  const submitData = () => {
    let t = info;
    t = [...t, { id: uuidv4(), ...todo }];
    setTodo(initState);

    if (t.length === 1) {
      // when there was no card and one new card is added then make it's opacity 100 not 0
      let changeOpc = t[0];
      changeOpc = { ...changeOpc, ["opc"]: "100" };
      t[0] = changeOpc;
    }
    setInfo([...t]);
    setImg("./images/person-image.jpg");

    console.log("check", t);
    dispatch(
      setData({
        section: "Testimonials",
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
      <h1 className="text-xl font-bold py-5">Testimonial</h1>
      <div className="mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 h-36 rounded-full  border-8 border-body-color shadow-lg relative flex items-center justify-center overflow-hidden">
            <img className="h-36 w-36  bg-cover" src={img} alt="avatar" />
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
          name="name"
          value={todo.name}
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
          name="desc"
          value={todo.desc}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Course"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Course
        </label>
        <input
          type="text"
          id="Course"
          name="course"
          value={todo.course}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Rating"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Rating
        </label>
        <input
          type="text"
          id="Rating"
          name="rating"
          value={todo.rating}
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

      <div className="py-10">
        {info.map((contact, ind) => {
          return (
            <div className="flex items-center justify-between pt-2" key={ind}>
              <p className="font-sans font-medium text-gray-700">
                {contact.name}
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
    </div>
  );
};

export default TestimonialForm;
