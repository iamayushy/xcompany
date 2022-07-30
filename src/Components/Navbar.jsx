import {Link} from 'react-router-dom'
import x from '../assets/xcompany.svg'
const Navbar = () => {
    return(
        <div className="navbar">
            <section className="nav-list">
                <section className='logo'>
                    <img id='logo-svg' src={x} alt="logo" />
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
                    <Link className='round-link' to='/game-studio'>Game Mode</Link>
                </div>
                </section>
            </section>
        </div>
    )
}
export {Navbar}
