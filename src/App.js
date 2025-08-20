import { useEffect, useRef, useState } from "react";
import './App.scss'
import Task from "./components/Task";


function App() {

  // const [taskName, setTaskName] = useState("")
  // const [time, setTime] = useState("")
  const [taskList, setTaskList] = useState([])

  const inputName = useRef(null)
  const inputTime = useRef(null)

  const addTask = () => {
    setTaskList([...taskList, {task: inputName.current.value, time: inputTime.current.value}])

    // This will log the old value (because update hasn't applied yet)
    console.log("Immediately after set:", taskList); 
    
  }

  useEffect(() => {
    console.log("updated list" + taskList);
  }, [taskList]);

  return (
    <div className="App">

      <div class="container">
        <h1>Todo list</h1>

        <label>Task Name: </label>
        <input type="text" id="task" ref={inputName} />

        <label>Task Time: </label>
        <input type="text" id="task" ref={inputTime} />

        <button onClick={addTask}>Add</button>

      </div>

      {/* <Task taskName="do homework" time="20 minutes" /> */}

      {taskList.map((task) => {
        return <Task taskName={task.task} time={task.time} />
      })}

    </div>
  );
}

export default App;
