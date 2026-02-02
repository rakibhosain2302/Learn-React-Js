import React from "react";
import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(),
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: uuidv4(),
    name: "Bob",
    age: 32,
    email: "bob@example.com",
    skills: ["Python", "Django"],
  },
  {
    id: uuidv4(),
    name: "Charlie",
    age: 25,
    email: "charlie@example.com",
    skills: ["Java", "Spring"],
  },
];

const NestedList = () => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "20px" }}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <h3>Skills:</h3>
          <ul>
            {user.skills.map((skill) => (
              <li key={uuidv4()}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NestedList;
