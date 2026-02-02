import React, { Component } from 'react'

export default class event extends Component {
    constructor() {
        super();
        this.state = {
            changValue: ''
        };
    }
  render() {
    return (
      <div>
        <h1>Event Handling Example</h1>
        <input type="text" onChange={(e) => this.setState({ changValue: e.target.value })} />
        <p style={{ marginTop: '20px', color: 'red'}}>Input Value: {this.state.changValue}</p>
      </div>
    )
  }
}
