import React from 'react'
import { CiClock2, CiLocationOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../component-css/topbar.css'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
const Topbar = () => {
    const facebook = "https://facebook.com/"
    const instagram = "https://www.instagram.com/"
    const twitter = "https://x.com/"
    const linkedin = "https://www.linkedin.com/"
    return (
        <div className='top_bar_section'>
            <div className='container tab_bar'>
                <div className='left_content'>
                    <div className='time'>
                        <CiClock2 />
                        <p>Monday - Friday8AM - 9PM</p>
                    </div>
                    <div className='address'>
                        <CiLocationOn />
                        <p>725 Park Ave, New York</p>
                    </div>
                </div>
                <div className='right_content'>
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
        </div>
    )
}

export default Topbar
