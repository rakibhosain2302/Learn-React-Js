import React, { useState } from "react";

export default function Form() {
  // State to hold form data(Object)
  const [user, setUser] = useState({ name: "", email: "", password: "" });
//   const { name, email, password } = user;
    
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    
  };

  return (
    <div className="mt-5">
      <div className="card w-50 h-50 mx-auto p-4">
        <h1 className="text-center">Form Example</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-2"
              aria-describedby="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-2"
              aria-describedby="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="checkbox" />
            <label className="form-check-label" htmlFor="checkbox">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
