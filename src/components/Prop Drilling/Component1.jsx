import React, { useState } from 'react';
import Component2 from './Component2.jsx'; // Renamed for consistency

const data = {
  userName: 'John Doe',
  age: 30,
};


const Component1 = () => {
  const [user] = useState(data);
  console.log(user);


  // Passing the 'user' object into the 'data' prop
  return <Component2 data={user} />;
};

export default Component1;