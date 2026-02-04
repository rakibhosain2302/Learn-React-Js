import React, { Component } from "react";

export default class UserForm extends Component {
    constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userName.current.value);
    console.log(this.password.current.value);
    
  };



  render() {
    return (
      <div className="mt-5">
        <h2 className="text-center mb-3">Class Component Ref Example</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row align-items-center mb-3">
            {/* Label (Left) */}
            <label
              htmlFor="userName"
              className="col-4 text-end col-form-label"
            >
              User Name
            </label>

            {/* Input (Right) */}
            <div className="col-8">
              <input
                id="userName"
                name="userName"
                className="form-control w-50"
                type="text"
                ref={this.userName}
              />
            </div>
          </div>
          <div className="row align-items-center mb-3">
            {/* Label (Left) */}
            <label
              htmlFor="userName"
              className="col-4 text-end col-form-label"
            >
              Password
            </label>

            {/* Input (Right) */}
            <div className="col-8">
              <input
                // id="password"
                name="password"
                className="form-control w-50"
                type="password"
                ref={this.password}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
