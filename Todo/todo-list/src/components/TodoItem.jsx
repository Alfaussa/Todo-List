import React from 'react'
import { GrClose, GrEdit } from "react-icons/gr";

const TodoItem = ({todo, completeTask, editTask, removeTask}) => {
  return <>
  <div>
    <div onClick={()=>completeTask(todo.id)} className={(todo.isCompleted) ? 'todo-item completed' : 'todo-item'}>{todo.task}</div>
    <div onClick={()=>editTask(todo.id)}><GrEdit/></div>
    <div onClick={()=>removeTask(todo.id)}><GrClose/></div>
  </div>
  
  </>
  
  
}

export default TodoItem