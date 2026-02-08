import React, { memo } from 'react'


const Message = ({countValue}) => {
    console.log("Message Component Rendered")
  return (
    <div>
      <h1>Send {countValue} Messages</h1>
    </div>
  )
}

export default memo(Message)

