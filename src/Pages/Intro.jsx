import { Compete } from "../Components/Compete"
import { Game } from "../Components/Game"
import { Hero } from "../Components/Hero"
import { Reward } from "../Components/Rewards"

const Intro = () => {
    return (
        <>
            <Hero/>
            <Game/>
            <Reward/>
            <Compete/>
        </>
    )
}
export {Intro}
