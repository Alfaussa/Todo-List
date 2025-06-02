import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import EditTodoForm from './components/EditTodoForm'
import { nanoid } from 'nanoid';
import './App.css'

function App() {
  
const[todos, setTodos] = useState([]);

function addTask(userInput){
  if(userInput){
    let newTask = {
      id: nanoid(),
      task: userInput,
      completed:false,
      editing:false
    }
    setTodos([...todos, newTask])
  }

}



  return (
    <>
    <h1>Todo List</h1>
    <hr/>
    <TodoForm
    addTask={addTask}/>
    {todos.map((todo) =>(
    <TodoItem
    todo={todo}
    key={todo.id}/>
    ))}

  

    </>
  )
}

export default App
