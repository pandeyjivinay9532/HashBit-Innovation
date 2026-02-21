import { useState } from "react";

function App() {

  const [n1,setN1] = useState("")
  const [n2,setN2] = useState("")
  const [ans,setAns] = useState("")


  function add()
  {
    setAns(Number(n1) + Number(n2))
  }

  function sub()
  {
    setAns(Number(n1) - Number(n2))
  }

  function mul()
  {
    setAns(Number(n1) * Number(n2))
  }

  function div()
  {
    setAns(Number(n1) / Number(n2))
  }


  return (
    <div style={{padding:"20px"}}>

      <h2> Calculator </h2>

      <input
        type="number"
        placeholder="Enter number 1"
        value={n1}
        onChange={(e)=>setN1(e.target.value)}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="Enter number 2"
        value={n2}
        onChange={(e)=>setN2(e.target.value)}
      />

      <br/><br/>

      <button onClick={add}> Add </button>
      <button onClick={sub}> Sub </button>
      <button onClick={mul}> Mul </button>
      <button onClick={div}> Div </button>

      <h3> Result : {ans} </h3>

    </div>
  );
}

export default App;