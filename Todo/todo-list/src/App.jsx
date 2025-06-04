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
  const completeTask = (id) => {
    setTodos([...todos.map((todo)=>(id === todo.id) ? {...todo, isCompleted:!todo.isCompleted}: todo)])
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo)=>(id !== todo.id))])
  }
  const editTask = (id) => {
    setTodos([...todos.map((todo)=>(id === todo.id) ? {...todo, isEdititg: !todo.isEdititg } : todo)])
  }
  const editTodo = (task, id) => {
   setTodos([...todos.map((todo)=>(id === todo.id) ? {...todo, task, isEdititg: !todo.isEdititg } : todo)])
  } 
  
  return (
    <>
    <h1>Todo List</h1>

    <TodoForm
    addTask={addTask}/>
      
    
{todos.map((todo)=>(
  (todo.isEdititg) ?
  <EditTodoForm
  key={todo.id}
  task={todo}
  editTodo={editTodo}

  /> :
  <TodoItem
    todo={todo}
    key={todo.id}
    completeTask={completeTask}
    removeTask={removeTask}
    editTask={editTask}
    />
    ))}
    

    </>
  )

}
export default App
