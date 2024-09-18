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
    const menuItems = [
        { path: '/', label: 'home' },
        { path: '/pages', label: 'pages' },
        { path: '/services', label: 'services' },
        { path: '/work', label: 'work' },
        { path: '/page', label: 'page' },
        { path: '/contact', label: 'contact' }
    ];
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
                            {menuItems.map((item, index) => (
                                <li key={index} className={`${activeState === index ? 'active' : ''}`} onClick={() => handleMouseOver(index)}>
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            ))}
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
