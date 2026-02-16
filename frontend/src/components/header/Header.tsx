import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>Course Online</span>
                </div>
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li className='nav-link'><NavLink to={"/"}>Home</NavLink></li>
                        <li className='nav-link'><NavLink to={"/about"}>About</NavLink></li>
                        <li className='nav-link'><NavLink to={"/services"}>Services</NavLink></li>
                        <li className='nav-link'><NavLink to={"/contact"}>Contact</NavLink></li>


                    </ul>
                </nav>
                <div className='links'>
                    <Link to="shop">
                    <i className="fa-solid fa-bag-shopping"></i>
                    </Link>
                    <Link to="profile">
                    <i className="fa-solid fa-user-graduate"></i>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header