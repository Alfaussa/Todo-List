import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import EditTodoForm from './components/EditTodoForm'
import { nanoid } from 'nanoid';
import './App.css'

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput){
      const newTask = {
        id: nanoid(),
        task: userInput,
        isCompleted:false,
        isEditing:false
      }
      setTodos([...todos, newTask])
    }
  }
  const removeTask = (id) =>{
    setTodos([...todos.filter((todo) => (todo.id === !id))])
  }
const completeTask = (id) => {
setTodos([...todos.map((todo) =>
((todo.id === id) ? {...todo, isCompleted: !todo.isCompleted}: {todo}))])
}
const editTask = (id) =>{
setTodos([...todos.map((todo) =>
((todo.id === id) ? {...todo, isEditing: !todo.isEditing}: {todo}))])
}
const editTodo = (task, id) =>{
setTodos([...todos.map((todo) =>
((todo.id === id) ? {...todo, task, isEditing: !todo.isEditing}: {todo}))])
}


  return (
    <>
    <h1>Todo List</h1>

    <TodoForm
    addTask={addTask}
    />
    {todos.map((todo)=>
    (todo.isEditing) ?
    <EditTodoForm
     key = {todo.id}
     editTask={editTodo}
     task={todo}/>:
   (  <TodoItem
    todo = {todo}
    key = {todo.id}
    removeTask={removeTask}
    completeTask={completeTask}
    editTask={editTask}/> 
  ))

    }
   
   
  

    </>
  )

}
export default App
