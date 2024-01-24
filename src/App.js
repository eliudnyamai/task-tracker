import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState, useEffect} from 'react'

import './App.css';

function App() {
 

   const fetchTasks= async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const addTask=async (task)=>{
    // const id=Math.floor(Math.random() *1000)+1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
 }
  const deleteTask= async (id)=>{
    await fetch(`http://localhost:5000/tasks/1`,
    {
      method:'DELETE'
    })
     setTasks(tasks.filter((task)=>task.id!==id))
  }
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
 }
 const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks]= useState([


])
useEffect(()=>{
  const getTasks= async () =>{
    const tasksFromServer= await fetchTasks()
    setTasks(tasksFromServer)  
  }
  getTasks()
 }, []) 
  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length>0?<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>:"No Tasks To Show"}
   
    </div>
  );
}

export default App;
