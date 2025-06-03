import React, { useState } from 'react'

const TodoForm = ({addTask}) => {

  const [userInput, setUserInput] = useState('');

  function handleChange(event){
    setUserInput(event.target.value)
  }

  function handleClick(event){
    event.preventDefault();
    addTask(userInput);
    setUserInput('');
  }
  return (


    <form onSubmit={((userInput) => handleClick(userInput))}>
      <input value={userInput} className='todo-input' type="text" placeholder='add your task...' onChange={handleChange}></input>
      <button type="submit" className='todo-button'>save</button>
      </form>
  )
}

export default TodoForm