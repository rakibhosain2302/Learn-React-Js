import React from 'react'

const Toggle = () => {
    const [toggle, setToggle] = React.useState(true);
    
  return (
    <div className='card w-100 p-3 mt-5'>
      <h1 className='text-center'>Toggle Component</h1>
      {toggle && 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum magni amet dicta impedit laborum, suscipit rerum, perspiciatis vero, debitis quidem facilis! Quam odio at laudantium consequatur voluptates eum odit!
      Odit commodi libero animi natus hic repudiandae cumque aliquid provident dolore eveniet nihil perspiciatis sequi asperiores, perferendis, maiores eum molestias ducimus quis facere earum rem vero velit. Commodi, ab obcaecati!
      </p>
      }
      
      <div className="text-center mt-3">
        <button type="button" className="btn btn-secondary" onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
      </div>
    </div>
  )
}

export default Toggle
