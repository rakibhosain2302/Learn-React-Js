import React, { useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";

const initalState = {
  name: "",
  age: "",
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case "Set_Name":
      return {
        ...state,
        name: action.payload,
      };

    case "Set_Age":
      return {
        ...state,
        age: action.payload,
      };
  }
};

const RouteParemeter = () => {
  const [search, setSearch] = useSearchParams();
  const [user, dispatch] = useReducer(UserReducer, initalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ name: user.name, age: user.age });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">RouteParemeter Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex justify-content-center">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="form-control p-1 w-25"
            value={user.name}
            onChange={(e) =>
              dispatch({ type: "Set_Name", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            className="form-control p-1 w-25 ms-1"
            value={user.age}
            onChange={(e) =>
              dispatch({ type: "Set_Age", payload: e.target.value })
            }
          />
          <button className="btn btn-primary ms-1">Search</button>
        </div>
        {/* <h4 className='text-center fw-bold fs-4 mt-4'>{search.get('id')}</h4>
        <h4 className='text-center fw-bold fs-4 mt-4'>{search.get('age')}</h4>
        <h4 className='text-center fw-bold fs-4 mt-4'>{search.get('name')}</h4> */}
      </form>
    </div>
  );
};

export default RouteParemeter;
