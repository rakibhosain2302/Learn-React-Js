import React, { useState } from 'react'
import Message from './message'

const Index = () => {
    const [count, setCount] = useState(0)

    console.log("App Component Rendered")
  return (
    <div className='mt-5'>
      <h1 className='text-center mb-5'>Rect Memo Example</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='mb-3'>Increment</button>
      <Message countValue={count} />
    </div>
  )
}

export default Index
