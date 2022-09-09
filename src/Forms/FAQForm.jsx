import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AiFillDelete } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";
import { getData, setData } from "../Redux/DataReducer";
import { getShow, setFormNo, setSideBarShow } from "../Redux/SetBarReducer";
const initState = {
  question: "New Group 1",
  answer: "Add a Desc for Group",
};

const FAQForm = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector(getShow);
  const Data = useSelector(getData);

  const [todo, setTodo] = useState(initState);

  const [info, setInfo] = useState([...Data.FrequentlyAskedQuestion]);

  const changeInfo = (e) => {
    setTodo({ ...todo, [e.name]: e.value });
  };

  function deleteTodo(id) {
    let t = info;
    const newContactList = t.filter((contact) => {
      return contact.id !== id;
    });

    setInfo(newContactList);
    dispatch(
      setData({
        section: "FrequentlyAskedQuestion",
        data: newContactList,
      })
    );
  }

  const submitData = () => {
    let t = info;
    t = [...t, { id: uuidv4(), ...todo }];
    setTodo(initState);
    setInfo([...t]);

    dispatch(
      setData({
        section: "FrequentlyAskedQuestion",
        data: t,
      })
    );
    sidebarCall();
  };

  const sidebarCall = () => {
    if (showSideBar === "off") {
      dispatch(setSideBarShow("on"));
      dispatch(setFormNo(10));
    } else {
      dispatch(setSideBarShow("off"));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold py-5">Frequently Asked Question</h1>
      <div className="mb-6">
        <label
          htmlFor="Heading"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Question
        </label>
        <input
          type="text"
          id="Heading"
          name="question"
          value={todo.question}
          onChange={(e) => changeInfo(e.target)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Paragraph"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Answer
        </label>
        <input
          type="text"
          id="Paragrapgh"
          name="answer"
          value={todo.answer}
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
            <p className="font-sans font-normal text-gray-700">
              {contact.question}
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

export default FAQForm;
