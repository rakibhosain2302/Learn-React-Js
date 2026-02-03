import React, { Component } from 'react'


// Life Cycle Example

// 1. Mounting --> constructor --> render --> componentDidMount
// 2. Updating --> State/props --> render --> 
// 3. Unmounting --> componentWillUnmount

export default class lifeCycle extends Component {

    constructor(props) {
    super(props);    
    this.state = {
      count: 0
    };
    console.log("constructor");
    
    
}

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

   

  render() {
    console.log("render");
    return (
      <div className='text-center mt-5'>
      <h1>Life Cycle Hooks</h1>
        <h2>Count:{this.state.count} </h2>  
        <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
      </div>
    )
  }
}
