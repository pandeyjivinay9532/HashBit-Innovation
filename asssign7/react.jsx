import { useEffect , useState } from "react";

function App() {

  const [teams , setTeams] = useState([])


  useEffect(()=>{

    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    .then(res => res.json())
    .then(data => {

      data.sort(function(a,b){
        return a.NRR - b.NRR
      })

      setTeams(data)
    })

  },[])


  return (
    <div style={{padding:"20px"}}>

      <h2> IPL Points Table 2022 </h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th> Team </th>
            <th> Matches </th>
            <th> Won </th>
            <th> Lost </th>
            <th> Points </th>
            <th> NRR </th>
          </tr>
        </thead>

        <tbody>

          {teams.map((t,i)=>(
            <tr key={i}>
              <td>{t.Team}</td>
              <td>{t.Matches}</td>
              <td>{t.Won}</td>
              <td>{t.Lost}</td>
              <td>{t.Points}</td>
              <td>{t.NRR}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;