
import "./task-form.css";
import Tag from "./Tag/Tag";
import { useState } from "react";

const TaskForm = ({setTasks}) => {
// const{setTasks} = props;
const[taskData,setTaskData] = useState({
  task:"",
  status:"Ready for Development",
  tags:[],
});

const handleChange = (e)=>{
 const {name,value} =e.target;
// const name = e.target.name;
// const value = e.target.value;
 setTaskData((prev)=>{
   return   {...prev,[name]:value}
 });
}


  // const[task,setTask] = useState("");
  // const[status,setStatus] = useState("");

  // const handleTask=(e)=>{
  //  setTask(e.target.value);
  // }

  // const handleStatusChange=(e)=>{
  //  setStatus(e.target.value);
  // }


  // console.log(task,status);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTasks((prev)=>{
      return [...prev,taskData]
    })

    setTaskData({
  task:"",
  status:"Ready for Development",
  tags:[],
    })
  }
  
const selectedTag = (tag) =>{
  setTaskData((prev)=>{
    const isSelected = prev.tags.includes(tag);
    const tags = isSelected ? prev.tags.filter((item)=>item !== tag)
    :[...prev.tags,tag];

    return {...prev,tags};
})
// if(taskData.tags.some((item)=>item === tag)){
// const filterTags = taskData.tags.filter((item)=>item !== tag)
// setTaskData((prev)=>{
//     return {...prev,tags:filterTags};
//   });
// }
// else{
//    setTaskData((prev)=>{
//     return {...prev,tags:[...prev.tags,tag]};
//   })
// }
}

const checkTag = (tag) =>{
 return taskData.tags.some((item)=>item === tag);
}
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter tasks Details"
          onChange={handleChange}
        //  onChange={(e)=> setTask(e.target.value)}
         
        />

        <div className="task_form_bottom">
        <div>
         <Tag tagName="DEV" selectedTag ={selectedTag} selected = {checkTag("DEV")}/>
         <Tag tagName="QA"  selectedTag ={selectedTag} selected = {checkTag("QA")}  />
         <Tag tagName="Product Owner" selectedTag ={selectedTag} selected = {checkTag("Product Owner")} />
      </div>
      <div>
        <select className="task_status" 
        onChange={handleChange}
        name="status"
        value={taskData.status}
        >
            <option value="Ready for Development">Ready for Development</option>
            <option value="In Progress">In Progress</option>
            <option value="Ready for test">Ready for test</option>
            <option value="Closed">Closed</option>
        </select>
        <button type="submit" className="task_submit">+ Add</button>
          </div>
          </div>
</form>
</header>
  );
};

export default TaskForm;
