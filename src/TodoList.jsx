import React, { useState } from 'react'
import './app.css'

 export const TodoList = () => {
  const [todo , setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addtodo(){
    // setTodoList([...todoList, todo]) 
    // console.log(todoList)
    setTodoList((todoList)=>{
        const updateTodo = [...todoList, todo]
        console.log(updateTodo)
        setTodo("");
        return updateTodo
    })
  }
 
  return (
    
    <>
    <div className="container">
        <div className="header">Todo List</div>
        <input type="text" placeholder='Add Todo' value={todo} onChange={(e) =>setTodo(e.target.value)} />
        <button onClick={addtodo} >Add Todo</button>
    </div>
    </>
  )
}

export default TodoList