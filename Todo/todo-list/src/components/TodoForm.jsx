import React, { useState } from 'react'

const TodoForm = ({addTask, }) => {

    const [userInput, setUserInput] = useState('');

    function handleChange(event){

        setUserInput(event.target.value);
 
    }

    const handleClick = (event) =>{
        event.preventDefault();
        addTask(userInput)
    }

  return (
   
    <form onSubmit={handleClick}>
        <input value={userInput} type="text" placeholder='add your task...' onChange={handleChange}/>
        <button>save</button>
    </form>

  )
}

export default TodoForm;

