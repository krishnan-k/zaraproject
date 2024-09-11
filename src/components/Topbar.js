import React from 'react'
import { CiClock2, CiLocationOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../component-css/topbar.css'
const Topbar = () => {
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
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Topbar
