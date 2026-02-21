
function Success() {
  var user = JSON.parse(localStorage.getItem("user"))
  var id = Math.floor(Math.random()*100000)

  return (
    <div>
      <h2> Seat Booked Successfully </h2>
      <p> Booking ID : {id} </p>
      <p> Name : {user.name} </p>
      <p> Email : {user.email} </p>
      <p> Mobile : {user.mobile} </p>
    </div>
  )
}
export default Success
