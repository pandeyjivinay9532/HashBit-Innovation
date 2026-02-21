
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Movies from "./Movies"
import Details from "./Details"
import Form from "./Form"
import Success from "./Success"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
