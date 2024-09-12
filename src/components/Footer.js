import React from 'react'
import '../component-css/footer.css'
import { IoMailOutline } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import footerLogo from '../images/footerlogo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className='footer-news'>
                <div className='news-letter-section container'>
                    <div className='newsletter'>
                        <h3>subscribe</h3>
                    </div>
                    <div className='btn-section'>
                        <input type='text' placeholder='enter your email addreess' />
                        <button type='submit' className='submit-btn shine-effect'>subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-section'>
                <div className="container pt-5 pb-5">
                    <div className="footer-content">
                        <div className="footer-category">
                            <img src={footerLogo} alt='footer-logo' />
                            <div className='social-icons'>
                                <FaInstagram />
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                        <div className="footer-category">
                            <h4 className="title">Product</h4>
                            <ul>
                                <li><a className="link" href="">Landing Page</a></li>
                                <li><a className="link" href="">Popup Builder</a></li>
                                <li><a className="link" href="">Web-design</a></li>
                                <li><a className="link" href="">Content</a></li>
                                <li><a className="link" href="">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="footer-category">
                            <h4 className="title">Use Cases</h4>
                            <ul>
                                <li><a className="link" href="">Web-designers</a></li>
                                <li><a className="link" href="">Marketers</a></li>
                                <li><a className="link" href="">Small Business</a></li>
                                <li><a className="link" href="">Website Builder</a></li>
                            </ul>
                        </div>
                        <div className="footer-category">
                            <h4 className="title">Company</h4>
                            <ul>
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
                                <li><a className="link" href=""> <CiLocationOn /> Wisconsin Ave, Suite 700<br></br>
                                    Chevy Chase, Maryland 20815</a></li>
                                <li><a className="link" href=""><IoMailOutline /> alma.lawson@example.com</a></li>
                                <li><a className="link" href=""><MdCall /> +1 800 854-36-80</a></li>
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
}

export default Footer
