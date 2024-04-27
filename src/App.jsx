
import List from "./components/List"
import './App.css'
import { Route, Routes } from "react-router-dom"
import AddFruits from "./pages/AddFruits"

function App() {

 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/add-fruits" element={<AddFruits/>}/>
    </Routes>

    </>
  )
}

export default App
