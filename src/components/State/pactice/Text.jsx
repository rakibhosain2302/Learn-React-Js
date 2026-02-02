import React, { Component } from 'react'

export default class Text extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }
  render() {
    return (
      <div>
        <h1>Live Text Preview</h1>
        <textarea
          style={{ width: '100%', height: '200px', marginBottom: '20px' }}
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        ></textarea>
        <p>Preview:</p>
        <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
          {this.state.text}
        </div>
        <p>Characters: {this.state.text.length}</p>

        <button onClick={() => this.setState({ text: '' })}>Clear Text</button>
      </div>
    )
  }
}
