import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminAction() {
  // get location
  const loc = useLocation();
  const url = loc.pathname;

  const navigate = useNavigate();

  const navigatePreview = () => {
    navigate("/preview");
  };

  const navigateEdit = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto flex flex-row justify-center p-12 bg-black">
      <button
        onClick={url === "/" ? navigatePreview : navigateEdit}
        className="md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-md bg-gradient-to-tl from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white"
      >
        {url === "/" ? "Preview" : "Back To Edit"}
      </button>

      <button className="md:p-4 p-3 text-red-primary font-medium rounded-md md:m-2 m-1 transition-all duration-300 ease-in shadow-md bg-gradient-to-tl from-body-color to-gray-box hover:from-transparent hover:-translate-y-1 hover:to-transparent hover:bg-red-primary hover:text-white">
        Publish
      </button>
    </div>
  );
}

export default AdminAction;
