import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://task-manager-tq3g.onrender.com";
const API_URL2 = "http://localhost:5500";

function App() {
  const [ tasks, setTasks ] = useState([]); // State to store tasks
  const [ newTask,  setNewTask ] = useState(""); //state for input field

  // Fetch Tasks from Backend on Page Load
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setTasks(response.data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  // Add a New Task
  const addTask = () => {
    if (!newTask) return; //Prevents empty tasks
    axios.post(API_URL, {title: newTask })
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error("Error adding task", error));
      setNewTask("");   
    }

  // Delete a Task
  const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id != id)) )
      .catch(error => console.error("Error deleting task:", error));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Task Manager</h1>
      <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
      </ul>

    </div>  
  
  );
}

export default App;
