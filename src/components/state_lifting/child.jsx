import React from 'react'

const Child = (props) => {
const childData = "Data from child component";
props.sendDataToParent(childData);

  return (
    <div className='mt-5'>
      <h1>State Lifting Example</h1>
      <p>{props.data}</p> 
    </div>
  )
}

export default Child;

