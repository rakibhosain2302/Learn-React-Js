import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class State  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            count: 0
      }
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>State Component</h1>
        <p>Count: {count}</p>
        <Button className='me-2' onClick={() => this.setState({ count: count - 1 })} disabled={count === 0}>Decrement</Button>
        <Button onClick={() => this.setState({ count: count + 1 })}>Increment</Button>
      </div>
    )
  }
}

