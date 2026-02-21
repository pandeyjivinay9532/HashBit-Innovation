
import { useParams , useNavigate } from "react-router-dom"

function Details() {
  const {id} = useParams()
  const nav = useNavigate()

  return (
    <div>
      <h2> Movie Details </h2>
      <p> Movie ID : {id} </p>
      <button onClick={()=>nav("/form")}> Book Seat </button>
    </div>
  )
}
export default Details
