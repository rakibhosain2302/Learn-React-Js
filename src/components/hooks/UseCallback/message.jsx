import React, { memo } from 'react'


const Message = ({countValue, handleCount}) => {
    console.log("Message Component Rendered")
  return (
    <div>
      <h1>Send {countValue} Messages</h1>
      <button onClick={handleCount} className='mb-3'>Click Me</button>
    </div>
  )
}

export default memo(Message)

