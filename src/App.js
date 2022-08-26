import React , { useState} from 'react'
import Header from "./components/Header"
import "./App.css"
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
export default function App() {
  const [tasks, setTasks] = useState([ //task array of objects
    { id:"task_1", title: "Test 1", status: 0},
    { id:"task_2", title: "Test 2", status: 1}
  ])

const [showIncomplete, setShowIncomplete] = useState(false) //incomplete button

const [newTask, setNewTask] = useState("") //insert new tasks


const handleSubmit = (e) => { // if there is new task, add that task to existing tasks array 
  e.preventDefault()
  if (newTask)  {
    const task = {
      id: Date.now(),
      title: newTask,
      status: 0
    }
    setTasks([...tasks, task])
    setNewTask("")
  }
}

const handleInputChange =(e) => { // insert task as input value (setNewTask state as input value)
  setNewTask(e.target.value)
}

const setTaskStatus = (taskId, status) => {
  setTasks(tasks.map(task => {
    if (task.id ===taskId) {
      return {...task, status: status ? 1 : 0}
    }
    return task
  }))
}

const removeTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !==taskId) )
}

  return (
    <div className="container">
      <Header  title ="Todo List" subTitle="Get things done"/>
      <TaskList tasks={tasks} showIncomplete = {showIncomplete} setTaskStatus={setTaskStatus} removeTask={removeTask} setShowIncomplete= {setShowIncomplete}/>
      <AddTaskForm  newTask= {newTask} handleSubmit= {handleSubmit} handleInputChange ={handleInputChange}/>
    </div>
  )
}
