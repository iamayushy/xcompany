import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { Compete } from "./Components/Compete"
import { Game } from "./Components/Game"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Reward } from "./Components/Rewards"
import { Landing } from "./Components/Studio/Landing"
import { Zoom } from "./Components/Studio/Zoom"
import { Tape } from "./Components/Tape"
import { AuthContext } from "./Context/GoogleAuth"
import { Intro } from "./Pages/Intro"


function App() {
const {isAuth} = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      {isAuth ? <Zoom/> :
      <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/god-mode" element={<Landing/>}/>
     </Routes>
}
      {/* <Tape/> */}
    </div>
  )
}

export default App
