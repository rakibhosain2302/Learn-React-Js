import React, { Component } from 'react'

export default class index extends Component {

    constructor() {
        super();
        this.state = {
            message: 0
        }
        this.handleClick = this.handleClick.bind(this);
        // ;
    }
    // handleClick = () => {
    //     this.setState({
    //         message: this.state.message + 1
    //     });
    // }

    handleClick(){
        this.setState({
            message: this.state.message + 1
        } );
    }
  render() {
    return (
      <div>
        <h1>Binding Example</h1>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={() => this.setState({ message: 0 })}>Reset</button>
      </div>
    )
  }
}
