import React, { useState, useMemo} from 'react'
import Message from './message.jsx'

const Index = () => {
    const [count, setCount] = useState(0)

    const countValue = useMemo(() => {
        let number = 0;
         for (let i = 0; i < 1000000; i++){
            number++;
         }
         return number;
    }, [])


    console.log("App Component Rendered")
  return (
    <div className='mt-5'>
      <h1 className='text-center mb-5'>Rect UseMemo Hook Example</h1>
      <h1 className='mb-3'>Count: {countValue}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='mb-3'>Increment</button>
      <Message countValue={count} />
    </div>
  )
}

export default Index
