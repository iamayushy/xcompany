import comp from './compe.module.css'
const Compete = () => {
    const date = new Date()
    const year = date.getFullYear()
    return(
        <div className={comp.bg}>
            <section className={comp.description}>
                <h1>Compete With Community</h1>
            </section>

            <section className={comp.copy}>
                <h2>{year} | Built With God 😈  Mode 🔥 In India </h2>
            </section>
        </div>
    )
}
export {Compete}
