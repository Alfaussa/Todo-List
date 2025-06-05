import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {

  const [userInput, setUserinput] = useState(task.task);
 
  const handleChange = (event) => {
    setUserinput(event.target.value)
  }

  const handleClick = () => {

    editTodo(userInput, task.id);
    setUserinput('');
  }


  return (
  <form className='todo-form'onSubmit={(userInput)=>handleClick(userInput)}> 
    <input value={userInput} onChange={handleChange} type='text' placeholder='add your task ...' className='todo-input'></input>
    <button className='todo-button'>save</button>
  </form>

  )
}

export default EditTodoForm