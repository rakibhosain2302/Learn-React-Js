import React from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = React.useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }
  return (
    <div>
      <form className='border p-3 mb-3' onSubmit={handleSubmit}>
        <label htmlFor="new-todo" className='form-label me-2'>New Todo:</label>
        <input type="text" value={todo} onChange={handleChange}id="new-todo"/>
        <button type="submit" className='btn btn-primary ms-1'>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodo
