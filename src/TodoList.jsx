import React, { useState } from 'react'
import './app.css'

 export const TodoList = () => {
  const [todo , setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function setTodo{

  }
 
  return (
    
    <>
    <div className="container">
        <div className="header">Todo List</div>
        <input type="text" placeholder='Add Todo' value={todo} onChange={(e) =>setTodo(e.target.value)} />
        <button onClick={setTodo} >Add Todo</button>
    </div>
    </>
  )
}

export default TodoList