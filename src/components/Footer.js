import React, { useState } from 'react';
import '../component-css/footer.css';
import { IoMailOutline } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import footerLogo from '../images/footerlogo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPlus, FaXTwitter } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };
    const facebook = "https://facebook.com/"
    const instagram = "https://www.instagram.com/"
    const twitter = "https://x.com/"
    const linkedin = "https://www.linkedin.com/"
    return (
        <footer>
            <div className='footer-news'>
                <div className='news-letter-section container'>
                    <div className='newsletter'>
                        <h3>subscribe</h3>
                    </div>
                    <div className='btn-section'>
                        <form>
                            <input type='text' placeholder='enter your email address' required />
                            <button type="submit" className='submit-btn shine-effect'>subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-section'>
                <div className="container pt-5 pb-5">
                    <div className="footer-content">
                        <div className="footer-category" onClick={() => toggleCategory('brand')}>
                            <img src={footerLogo} alt='footer-logo' />
                            <div className='social-icons'>
                                <Link to={instagram} target='blank'>
                                    <FaInstagram />
                                </Link>
                                <Link to={facebook} target='blank'>
                                    <FaFacebook />
                                </Link>
                                <Link to={twitter} target='blank'>
                                    <FaXTwitter />
                                </Link>
                                <Link to={linkedin} target='blank'>
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4 className="title" onClick={() => toggleCategory('product')}>
                                Product
                                {openCategory === 'product' ? <FiMinus className='minus-icon' /> : <FaPlus />}
                            </h4>
                            <ul className={`${openCategory === 'product' ? 'active' : ''}`}>
                                <li><a className="link" href="">Landing Page</a></li>
                                <li><a className="link" href="">Popup Builder</a></li>
                                <li><a className="link" href="">Web-design</a></li>
                                <li><a className="link" href="">Content</a></li>
                                <li><a className="link" href="">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="footer-category">
                            <h4 className="title" onClick={() => toggleCategory('use-cases')}>
                                Use Cases
                                {openCategory === 'use-cases' ? <FiMinus className='minus-icon' /> : <FaPlus />}
                            </h4>
                            <ul className={`${openCategory === 'use-cases' ? 'active' : ''}`}>
                                <li><a className="link" href="">Web-designers</a></li>
                                <li><a className="link" href="">Marketers</a></li>
                                <li><a className="link" href="">Small Business</a></li>
                                <li><a className="link" href="">Website Builder</a></li>
                            </ul>
                        </div>
                        <div className="footer-category">
                            <h4 className="title" onClick={() => toggleCategory('company')}>
                                Company
                                {openCategory === 'company' ? <FiMinus className='minus-icon' /> : <FaPlus />}
                            </h4>
                            <ul className={`${openCategory === 'company' ? 'active' : ''}`}>
                                <li><a className="link" href="">About Us</a></li>
                                <li><a className="link" href="">Careers</a></li>
                                <li><a className="link" href="">FAQ’s</a></li>
                                <li><a className="link" href="">Teams</a></li>
                                <li><a className="link" href="">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-category contact-details-sec">
                            <h4 className="title">Contact Us</h4>
                            <ul>
                                <li>
                                    <CiLocationOn /> Wisconsin Ave, Suite 700<br /> Chevy Chase, Maryland 20815
                                </li>
                                <li><Link to='mailto:alma.lawson@example.com'><IoMailOutline />alma.lawson@example.com</Link></li>
                                <li><Link to='tel: +1 800 854-36-80' className="link"><MdCall /> +1 800 854-36-80</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom pt-3">
                <div className="footer-bottom-content container">
                    <p>© 2023 Copyrights, All rights reserved. Design by <Link to='/'>PixelProCreations</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
