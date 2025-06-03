import React, { useState } from 'react'

const EditTodoForm = ({editTask, task}) => {

  const [userInput, setUserInput] = useState(task.task);

  function handleChange(event){
    setUserInput(event.target.value)
  }

  function handleClick(event){
    event.preventDefault();
    editTask(userInput, task.id);
    setUserInput('');
  }
  return (


    <form onSubmit={((task) => handleClick(task))}>
      <input value={userInput} className='todo-input' type="text" placeholder='add your task...' onChange={handleChange}></input>
      <button type="submit" className='todo-button'>save</button>
      </form>
  )
}

export default EditTodoForm