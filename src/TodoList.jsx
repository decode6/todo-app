import React from 'react'
import './app.css'

const TodoList = () => {
   const [todo, setTodo] = useState("")
  return (
    
    <>
    <div className="container">
        <div className="header">Todo List</div>
        <input type="text" placeholder='Add Todo' value={todo} />

    </div>
    </>
  )
}

export default TodoList