import React from "react";

const useRef = () => {

  const userName = React.useRef();
  const password = React.useRef();



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName.current.value);
    console.log(password.current.value);
  }


  return (
    <div className="mt-5">
      <h2 className="text-center mb-3">Functional Component Ref Example</h2>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center mb-3">
          {/* Label (Left) */}
          <label htmlFor="userName" className="col-4 text-end col-form-label">
            User Name
          </label>

          {/* Input (Right) */}
          <div className="col-8">
            <input
              // id="userName"
              name="userName"
              className="form-control w-50"
              type="text"
              ref={userName}
            />
          </div>
        </div>
        <div className="row align-items-center mb-3">
          {/* Label (Left) */}
          <label htmlFor="userName" className="col-4 text-end col-form-label">
            Password
          </label>

          {/* Input (Right) */}
          <div className="col-8">
            <input
              // id="password"
              name="password"
              className="form-control w-50"
              type="password"
              ref={password}
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default useRef;
