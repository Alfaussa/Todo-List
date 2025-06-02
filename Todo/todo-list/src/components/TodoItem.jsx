import React from 'react'
import { FiEdit3 } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
const TodoItem = ({todo,} ) => {
  return (<>
    <div>{todo.task}</div>
    <div>  <FiEdit3/></div>
    <div>  <FiDelete/></div>
    
    
    </>
  )
}

export default TodoItem