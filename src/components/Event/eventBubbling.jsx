import React from 'react'
import Button from 'react-bootstrap/Button'

export default function EventBubbling() {

    const parentClickHandler = () => {
        alert('Parent Clicked')
    }
    
    const childClickHandler = (e) => {
        e.stopPropagation(); // Prevents the event from bubbling up to parent elements
        alert('Child Clicked')
    }

  return (
    <div onClick={parentClickHandler} style={{ padding: '50px', border: '2px solid black', marginTop: '20px' }}>
      <h1>Event Bubbling Example</h1>
      <Button onClick={childClickHandler} variant="primary">Button</Button>
    </div>
  )
}
