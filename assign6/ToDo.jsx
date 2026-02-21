import { useState } from "react";

function App() {

  const [task,setTask] = useState("")
  const [list,setList] = useState([])


  function addTask()
  {
    if(task.trim()=="") return

    var newList = [...list , task]

    newList.sort()

    setList(newList)

    setTask("")
  }


  function delTask(i)
  {
    var arr = list.filter((_,index)=> index!=i)
    setList(arr)
  }


  return (
    <div style={{padding:"20px"}}>

      <h2> Todo List </h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />

      <button onClick={addTask}> Add </button>

      <ul>

        {list.map((t,i)=>(
          <li key={i}>
            {t}
            <button onClick={()=>delTask(i)}> Delete </button>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;