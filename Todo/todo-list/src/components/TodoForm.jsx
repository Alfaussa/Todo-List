import React, { useState } from 'react'

const TodoForm = ({addTask, }) => {

  const [userInput, setUserinput] = useState('');
 
  const handleChange = (event) => {
    setUserinput(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserinput('');
  }


  return (
  <form onClick={handleClick}> 
    <input value={userInput} onChange={handleChange} type='text' placeholder='add your task ...' className='todo-input'></input>
    <button className='todo-button'></button>
  </form>

  )
}

export default TodoForm