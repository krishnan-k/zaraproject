import React, { useEffect, useState } from 'react'
import '../component-css/navbar.css';
import { IoCallOutline, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';
import { BiMenu } from 'react-icons/bi';
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeState, setActiveState] = useState(0)
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const stickyNavigaion = () => {
        setSticky(window.scrollY >= 150)
    }
    useEffect(() => {
        window.addEventListener('scroll', stickyNavigaion);
        return () => {
            window.removeEventListener('scroll', stickyNavigaion)
        }
    }, [])

    const handleMouseOver = (index) => {
        setActiveState(index)
        setDrawerOpen(!drawerOpen)
    }

    const menuItems = [
        { href: '#home', label: 'home' },
        { href: '#aboutus', label: 'about us' },
        { href: '#service', label: 'services' },
        { href: '#process', label: 'gallery' },
        { href: '#blog', label: 'blog' },
        { href: '#contact', label: 'contact' }
    ];
    return (
        <div className={`navbar-section ${drawerOpen ? 'active' : ''} ${sticky ? 'navigaion-fixed' : ''}`}>
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
                                    <a href={item.href}>{item.label}</a>
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
