
import { useNavigate } from "react-router-dom"

function Movies() {
  const nav = useNavigate()

  var movies = Array.from({length:16},(_,i)=>({
    id:i+1,
    name:"Movie"+(i+1),
    img:"https://picsum.photos/200?"+(i+1)
  }))

  return (
    <div>
      <h2> Movie List </h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
        {movies.map(m=>(
          <div key={m.id} onClick={()=>nav("/details/"+m.id)}>
            <img src={m.img} width="100%" />
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Movies
