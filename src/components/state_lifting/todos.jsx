import React from 'react'
import Todo from './todo.jsx'

const Todos = (props) => {
    const todos  = props.todos;
  return (
    <div>
      <h1>Todos Component</h1>
        <ul>
          {Object.entries(todos).map(([key, value]) => (
            <Todo key={key} title={value} />
          ))}
        </ul>
      </div>
  )
}

export default Todos
