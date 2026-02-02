import React, { useState, useEffect } from "react";

const Index = () => {
  const error = false;

  const [inputValid, setInputValid] = useState(false);

  const [name, setName] = useState("");

  useEffect(() => {
    if(name.length < 2) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="mt-5">
      <h1 className="text-center" style={{ color: error ? "red" : "green" }}>
        React Dynamic Style Example
      </h1>
      <input
        type="text"
        className="form-control mt-3 p-2"
        style={{
          borderColor: inputValid ? "green" : "red",
          boxShadow: inputValid ? "0 0 5px green" : "0 0 5px red",
        }}
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Index;
