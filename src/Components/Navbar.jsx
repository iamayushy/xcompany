import {Link} from 'react-router-dom'
import x from '../assets/xcompany.svg'
const Navbar = () => {
    return(
        <div className="navbar">
            <section className="nav-list">
                <section className='logo'>
                    <h1> <span className='l-size'>(X)</span> nation</h1>
                </section>
                <section className='nav-links'>
                <div className='n-link'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='n-link'>
                    <Link to='/about'>About</Link>
                </div>
                <div className='n-link'>
                    <Link to='/services'>Services</Link>
                </div>
                <div className='n-link'>
                    <Link className='round-link' to='/god-mode'>G O D MODE</Link>
                </div>
                </section>
            </section>
        </div>
    )
}
export {Navbar}
