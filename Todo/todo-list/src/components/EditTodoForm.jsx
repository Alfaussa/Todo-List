import React, { useState } from 'react'

const EditTodoForm = ({editTask, task }) => {

    const [userInput, setUserInput] = useState(task.task);

    function handleChange(event){

        setUserInput(event.target.value);
 
    }

    const handleClick = () =>{

      editTask(userInput, task.id);
        setUserInput('');
    }

  return (
   
    <form onSubmit={handleClick}>
        <input value={userInput} type="text" placeholder='edit your task...' onChange={handleChange}/>
        <button>save</button>
    </form>

  )
}

export default EditTodoForm;

