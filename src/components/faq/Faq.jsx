import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Faq = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-3">
      {/* Header (same bg always) */}
      <div
        className="bg-dark text-white rounded p-3 d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={onToggle}
      >
        <h5 className="mb-0">{title}</h5>
        {isOpen ? <FaMinusCircle /> : <FaPlusCircle />}
      </div>

      {/* Content with delay */}
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <p className="text-content mb-0">{content}</p>
      </div>
    </div>
  );
};

export default Faq;
