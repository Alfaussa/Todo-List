import React from 'react'
import { GrClose, GrEdit } from "react-icons/gr";

const TodoItem = ({todo, editTask, removeTask, completeTask}) => {
  return (
    <div>
    <div onClick={()=>completeTask(todo.id)}>{todo.task}</div>
    <div onClick={()=>editTask(todo.id)}><GrEdit/></div>
    <div><GrClose onClick={removeTask}/></div>
    </div>
  )
}

export default TodoItem