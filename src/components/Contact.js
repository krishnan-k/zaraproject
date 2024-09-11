import React from 'react'
import '../component-css/contact.css'
import { CiClock2, CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='container'>
                <div className='contact-content'>
                    <div className='left-content'>
                        <h4>process</h4>
                        <h2>Contact Us. It’s Easy.</h2>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            Iterative approaches to corporate strategy foster collaborative.</p>

                        <div className='contact-details'>
                            <div className='call'>
                                <div className='icons'>
                                    <IoCallOutline />
                                </div>
                                <div className='details'>
                                    <p>Call Today</p>
                                    <h6>+1 800 100 900</h6>
                                </div>
                            </div>
                            <div className='time'>
                                <div className='icons'>
                                    <CiClock2 />
                                </div>
                                <div className='details'>
                                    <p>Monday To Friday</p>
                                    <h6>9AM - 5PM</h6>
                                </div>
                            </div>
                            <div className='location'>
                                <div className='icons'>
                                    <CiLocationOn />
                                </div>
                                <div className='details'>
                                    <p>USA Office</p>
                                    <h6>195 Devonshire St  Boston,<br></br> MA 02110</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <form>
                            <div className='data-1'>
                                <div className="form_full_name">
                                    <label className="phone">
                                        full name <span className='mandatory'>*</span>
                                    </label>
                                    <input
                                        className="name"
                                        type="text"
                                        placeholder="enter your name"
                                        required
                                    />
                                </div>
                                <div className="email">
                                    <label className="email-addres">
                                        email <span className='mandatory'>*</span>
                                    </label>
                                    <input
                                        className="company details"
                                        type="text"
                                        placeholder="consult@mail.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='data-2'>
                                <div className="form_phone">
                                    <label className="phone">
                                        phone <span className='mandatory'>*</span>
                                    </label>
                                    <input
                                        className="phone_number"
                                        type="text"
                                        placeholder="+008 654 231"
                                        required
                                    />
                                </div>
                                <div className="company">
                                    <label className="company_name">
                                        Company(optional)
                                    </label>
                                    <input
                                        className="company details"
                                        type="text"
                                        placeholder="company.com"
                                    />
                                </div>
                            </div>
                            <div className='text-message'>
                                <label className="company_name">
                                    message
                                </label>
                                <textarea></textarea>
                            </div>
                            <button
                                className="upload-button shine-effect"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
