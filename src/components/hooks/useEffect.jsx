import React, { useState, useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RiResetRightFill } from "react-icons/ri";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [isload, setIsload] = useState(false);

     useEffect(()=>{
        console.log('useEffect called');
     },[count])

    const handleIncrement = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

    const handleDecrement = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };



  return (
    <div className='mt-5'>
        {console.log('render called')}
      <h1 className='text-center'>useEffect Example</h1>
      <div className='card mt-5 mx-auto'>
        <span className='text-center fs-2 fw-bold mt-3'>Count: {count}</span>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary fs-3 mt-3 me-3' onClick={handleIncrement} ><CiCirclePlus /></button>
            <button className='btn btn-danger fs-3 mt-3' onClick={handleDecrement} disabled={count === 0}><CiCircleMinus /></button>
        </div>
        <button className='btn btn-dark fs-3 mt-3 w-25 mx-auto' onClick={() => setCount(0)}><RiResetRightFill /></button>
      <button className='btn btn-primary mt-3' onClick={() => setIsload(!isload)}>Loading</button>
      </div>
    </div>
  )
}

export default UseEffect
