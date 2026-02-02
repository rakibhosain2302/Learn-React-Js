import React,{ useState } from 'react'

export default function StateUpdate() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount((count) => count + 1);
        // setCount((count) => count + 1);
        // setCount((count) => count + 1);
        setCount((prevCount) => prevCount + 1);
    }

  return (
    <div className='mt-4'>
        <h1>State Update Example</h1>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
