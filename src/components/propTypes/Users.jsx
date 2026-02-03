import React, { useState } from "react";
import User from "./User.jsx";

const Users = () => {

const [user, setUser] = useState("rakib");


  return (
    <div>
      <User user={user} />
    </div>
  );
};

export default Users;
