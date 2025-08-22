import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm/task-form";
import "./app.css";
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/check-mark-button2.png";
import ProgressIcon from "./assets/InProgress.png";


const existingTask = localStorage.getItem("tasks");
console.log(JSON.parse(existingTask));

const App = () => {
  // const [tasks, setTasks] = useState([]);
  // const [tasks, setTasks] = useState(JSON.parse(existingTask));
  const [tasks, setTasks] = useState(existingTask ? JSON.parse(existingTask) : []);

  // console.log(tasks);
  useEffect(()=>{
   localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

  const[activeCard,setActiveCard] = useState(null);
   
  const onDrop = (status,position)=>{
console.log(`${activeCard} is going to placed into ${status} and at the position${position}`);
  

  if(activeCard === null ||activeCard === undefined ) return;

  const taskToMove = tasks[activeCard];
  const updatedTasks = tasks.filter((task,index)=> index !== activeCard)
  updatedTasks.splice(position ,0,{
    ...taskToMove,
    status:status,
  });

  setTasks(updatedTasks);
}
  const handleDelete = (taskIndex)=>{
   const neWtasks = tasks.filter((task,index)=>index !== taskIndex )
   setTasks(neWtasks);
  }
  return (
    <div className="app">
      <h2 style={{ textAlign: "center", margin: "30px" }}>Jira Board</h2>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for Development"
          tasks={tasks}
          status="Ready for Development"
            handleDelete = {handleDelete}
            setActiveCard={setActiveCard}
            onDrop = {onDrop}
        />
        <TaskColumn
          title="In Progress"
          icon={ProgressIcon}
          tasks={tasks}
          status="In Progress"
            handleDelete = {handleDelete}
            setActiveCard={setActiveCard}
             onDrop = {onDrop}
        />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
            handleDelete = {handleDelete}
            setActiveCard={setActiveCard}
             onDrop = {onDrop}
        />
        <TaskColumn
          title="Closed"
          icon={ClosedIcon}
          tasks={tasks}
          status="Closed"
          handleDelete = {handleDelete}
          setActiveCard={setActiveCard}
           onDrop = {onDrop}
        />
     
      </main>
         
    </div>
  );
};

export default App;
