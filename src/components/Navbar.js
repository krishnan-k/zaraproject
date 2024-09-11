import React from 'react'
import '../component-css/navbar.css';
import { IoCallOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';
const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='nav-content'>
                    <nav>
                        <ul>
                            <li className='active'><Link to='/'>home</Link></li>
                            <li><Link to='/'>pages</Link></li>
                            <li><Link to='/'>services</Link></li>
                            <li><Link to='/'>work</Link> </li>
                            <li><Link to='/'>page</Link></li>
                            <li><Link to='/contact'>contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='contact_number'>
                    <button type='button' className='enquery_btn'>
                        <span className='contact-icon'>
                            <IoCallOutline />
                        </span>
                        <span className='phone_number'>+ (888) 452 1505</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
