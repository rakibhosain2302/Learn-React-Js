import React from 'react'
import Todos from './todos.jsx'
import NewTodo from './newTodo.jsx';

const DummyTodos = { "Todo1": "Learn React", "Todo2": "Build a React App", "Todo3": "Deploy the App" };

const Home = () => {
    const [todos, setTodos] = React.useState(DummyTodos);

    const handleNewTodo = (newTodo) => {
        const newTodoKey = `Todo${Object.keys(todos).length + 1}`;
        setTodos((prevTodos) => ({
            ...prevTodos,
            [newTodoKey]: newTodo,
        }));
    }

  return (
    <div className='mt-5'>
        <NewTodo onTodo={handleNewTodo}/>
        <Todos todos={todos} />
    </div>
  )
}

export default Home
