import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewData = () => {
  const handleChange = () => {
    toast.success("This is a success notification");
  };

  return (
    <div className="w-100 h-100 p-3 mt-5">
      <h1 className="text-center mt-4">Notification System Toastify</h1>
      <button
        className="btn btn-primary mx-auto d-block"
        onClick={handleChange}
      >
        Click Me
      </button>
      <ToastContainer />
    </div>
  );
};

export default NewData;
