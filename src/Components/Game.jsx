import game from './game.module.css'
import videogame from '../assets/game.mp4'
const Game = () => {
    return(
        <div className={game.bg}>
            <section className={game.text}>
                <h1>Enjoy the <span className={game.des}> God Mode </span> </h1>
            </section>
        </div>
    )
}
export {Game}
