import { Game } from "./Components/Game"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Tape } from "./Components/Tape"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Game/>
      {/* <Tape/> */}
    </div>
  )
}

export default App
