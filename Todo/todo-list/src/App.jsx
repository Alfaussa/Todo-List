import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import EditTodoForm from './components/EditTodoForm'
import { nanoid } from 'nanoid';
import './App.css'

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) =>{
    if(userInput){
      const newTask = {
        id: nanoid(),
        task: userInput,
        isCompleted:false,
        isEdititg: false
      }
      setTodos([...todos, newTask])
    }
  }


  return (
    <>
    <h1>Todo List</h1>
    <TodoForm
    addTask={addTask}/>

    <TodoItem/>

    </>
  )

}
export default App
