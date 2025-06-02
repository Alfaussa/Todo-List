import React from 'react'
import { FiEdit3 } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
const TodoItem = ({todo, removeTask, completeTask, editTask} ) => {
  return (<>
    <div onClick={()=>completeTask(todo.id)} className={todo.completed ? "todo-row completed" : "todo-row"}>{todo.task}</div>
    <div className={todo.isEdit ? "todo-row-editing" : "todo-row" } onClick={()=>editTask(todo.id)}>  <FiEdit3/></div>
    <div onClick={()=>removeTask(todo.id)}><FiDelete/></div>
    
    </>
  )
}

export default TodoItem