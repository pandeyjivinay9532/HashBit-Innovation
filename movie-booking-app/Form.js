
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Form() {
  const nav = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")

  function submit() {
    var data = {name,email,mobile}
    localStorage.setItem("user",JSON.stringify(data))
    nav("/success")
  }

  return (
    <div>
      <h2> Book Ticket </h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} /><br/><br/>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input placeholder="Mobile" onChange={e=>setMobile(e.target.value)} /><br/><br/>
      <button onClick={submit}> Submit </button>
    </div>
  )
}
export default Form
