import React, { useState } from 'react';
import Component2 from './Component2.jsx'; // Renamed for consistency
import { UserContext } from './UserContext.jsx';

const data = {
  userName: 'Mr. Jacks',
  age: 21,
};



const Component1 = () => {
  const [user] = useState(data);
  const [desc] = useState("Hello I am Mr. Jacks And I am 21 years old");


   return (
    <UserContext.Provider value={{ ...user, desc }}>
      <Component2 />
    </UserContext.Provider>
  );

};

export default Component1;