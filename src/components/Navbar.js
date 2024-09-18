import React, { useState } from 'react'
import '../component-css/navbar.css';
import { IoCallOutline, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';
import { BiMenu } from 'react-icons/bi';
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const [activeState, setActiveState] = useState(0)
    const handleMouseOver = (index) => {
        setActiveState(index)
    }
    // const menuItems = [
    //     { path: '/', label: 'home' },
    //     { path: 'aboutus', label: 'about us' },
    //     { path: 'services', label: 'services' },
    //     { path: 'process', label: 'process' },
    //     { path: 'feedback', label: 'feedback' },
    //     { path: 'contact', label: 'contact' }
    // ];
    return (
        <div className={`navbar-section ${drawerOpen ? 'active' : ''}`}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/"> <img src={logo} alt='logo' /></Link>
                </div>
                <button className='drawer-toggle' onClick={toggleDrawer}>
                    <BiMenu />
                </button>
                <div className={`nav-content ${drawerOpen ? 'open' : ''}`}>
                    <button className='drawer-close' onClick={toggleDrawer}>
                        <IoClose />
                    </button>
                    <nav>
                        <ul>
                            <li className='active'><Link to='/'>home</Link></li>
                            <li><Link spy={true} smooth={true} duration={500}  to="aboutus">aboutus</Link></li>
                            <li><Link to='ss'>services</Link></li>
                            <li><Link to='aboutus'>work</Link> </li>
                            <li><Link to='aboutus'>page</Link></li>
                            <li><Link to='aboutus'>contact</Link></li>
                        </ul>
                    </nav>
                    <div className='contact_number'>
                        <button type='button' className='enquery_btn'>
                            <span className='contact-icon'>
                                <IoCallOutline />
                            </span>
                            <span className='phone_number'><Link to='tel:+ (888) 452 1505'>+ (888) 452 1505</Link></span>
                        </button>
                    </div>
                </div>
                <div className='contact_number'>
                    <button type='button' className='enquery_btn'>
                        <span className='contact-icon'>
                            <IoCallOutline />
                        </span>
                        <span className='phone_number'><Link to='tel:+ (888) 452 1505'>+ (888) 452 1505</Link></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
