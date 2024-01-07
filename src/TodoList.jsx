import React, { useState } from 'react'
import './app.css'

 export const TodoList = () => {
  const [todo , setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addtodo(){
   
    setTodoList((todoList)=>{
        const updateTodo = [...todoList, todo]
        console.log(updateTodo)
        setTodo("");
        return updateTodo
    })
  }

  function remove(i){
   const updatedTodos = todoList.filter((elem ,id )=>{
    return i!=id; 
   }) 
   setTodoList(updatedTodos)
  }

  function removeAll(){
    setTodoList([]);
  }
 
  return (
    
    <>
    <div className="container">
        <div className="header">Todo List</div>
        <input type="text" placeholder='Add Todo' value={todo} onChange={(e) =>setTodo(e.target.value)} />
        <button onClick={addtodo} >Add Todo</button>
        <p>Todo Items</p>
        {todoList!=[] && todoList.map((data , i ) =>{
          return(
            <>
            <p key={i}>
              <div>{data}</div>
              <button onClick={()=>remove(i)}>Remove</button>
              </p></>
          )
        })}
        {todoList.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}

export default TodoList