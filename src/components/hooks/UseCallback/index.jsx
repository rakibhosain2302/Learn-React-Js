import React, { useCallback, useState } from 'react'
import Message from './message'

const Index = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)
    const handleCount = useCallback(() => {
        setCount(count + 1)
    }, [count])



    console.log("App Component Rendered")
  return (
    <div className='mt-5'>
      <h1 className='text-center mb-3'>UseCallback Hook</h1>
      {toggle ? "On" : "Off"}
      <button onClick={() => setToggle(!toggle)} className='mb-4'>Toggle</button>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='mb-3'>Increment</button>
      <Message countValue={count} handleCount={handleCount}/>
    </div>
  )
}

export default Index
