import React, { useState } from "react";
import Faq from "./Faq";
import { data } from "./Data";

const Faqs = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="container mt-5">
      <div className="card w-50 mx-auto h-100">
        <h2 className="card-header text-center">FAQs</h2>

        <div className="card-body">
          {data.map((faq) => (
            <Faq
              key={faq.id}
              {...faq}
              isOpen={activeId === faq.id}
              onToggle={() => setActiveId(activeId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
