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
        isEditing: false
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
    setTodos([...todos.map((todo)=>(id === todo.id) ? {...todo, isEditing: !todo.isEditing } : todo)])
  }
  const editTodo = (task, id) => {
   setTodos([...todos.map((todo)=>(id === todo.id) ? {...todo, task, isEditing: !todo.isEditing } : todo)])
  } 
  
  return (
    <div className="modal-overlay">
    <div className='todo-wrapper'>
    <h1 className='todo-header'>Todo List</h1>

    <TodoForm
    addTask={addTask}/>
    <hr className='todo-divider'/>
    
{todos.map((todo)=>(
  (todo.isEditing) ?
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
    

    </div>
    </div>
  )

}
export default App
