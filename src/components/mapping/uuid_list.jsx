
import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
    {
        'title': 'Learn React',
        'description': 'Study the React documentation and build a simple app.',
        'date': new Date(),
        'year': new Date().getFullYear()
    },
    {
        'title': 'Build a To-Do App',
        'description': 'Create a to-do list application using React.',
        'date': new Date(),
        'year': new Date().getFullYear()
    },
    {
        'title': 'Explore React Hooks',
        'description': 'Understand and implement React Hooks in your projects.',
        'date': new Date(),
        'year': new Date().getFullYear()
    }
];

console.log(uuidv4());

const list = () => {
    return (
    <div>
        {todos.map((todo) => (
            <div key={uuidv4()}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <p>{todo.date.toDateString()}</p>
                <p>{todo.year}</p>
            </div>
        ))}
    </div>
    );
}

export default list;