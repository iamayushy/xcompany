import { Compete } from "./Components/Compete"
import { Game } from "./Components/Game"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Reward } from "./Components/Rewards"
import { Tape } from "./Components/Tape"


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Game/>
      <Reward/>
      <Compete/>
      {/* <Tape/> */}
    </div>
  )
}

export default App
