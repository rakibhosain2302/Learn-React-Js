import React, { Component } from 'react'
import Login from './login.jsx'
import Home from './home.jsx'

export default class index extends Component {
    constructor() {
    super()
    this.state = {
      isLoggedIn: true,
    }
  }

  render() {

    const  { isLoggedIn } = this.state
    return (
      <div>
        <h1>Conditional Rendering Example</h1>
        <p>This component demonstrates conditional rendering in React.</p>
        {isLoggedIn ? <Home /> : <Login />}
      </div>
    )
  }
}
