import React, { useRef, useState } from 'react';
import '../component-css/contact.css';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [error, setError] = useState({});

    const formValidation = (name, value) => {
        let newErrors = '';
        if (name === 'fullName' && !value) newErrors = 'User name is required';
        else if (name === 'email') {
            if (!value) newErrors = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(value)) newErrors = 'Email is invalid';
        } else if (name === 'phone' && !value) newErrors = 'Phone number is required';
        else if (name === 'company' && !value) newErrors = 'Company name is required';
        else if (name === 'message' && !value) newErrors = 'Message cannot be blank';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(prevError => ({
            ...prevError,
            [name]: formValidation(name, value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Your Emailjs service ID, template ID, and public key
        const serviceId = 'service_s4miac5';
        const templateId = 'template_1tka4we';
        const publicKey = 'lE6YScQKSLrvPkXXv';

        const templateParams = {
            fullName: formData.fullName,
            from_email: formData.email,
            message: formData.message
        }
        const errorMessage = {
            fullName: formValidation('fullName', formData.fullName),
            email: formValidation('email', formData.email),
            phone: formValidation('phone', formData.phone),
            company: formValidation('company', formData.company),
            message: formValidation('message', formData.message)
        };

        if (Object.values(errorMessage).every(error => !error)) {
            emailjs.send(serviceId, templateId, publicKey, formData, templateParams)
                .then(() => {
                    alert('Message sent successfully!');
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        message: ''
                    });
                    setError({});
                })
                .catch((err) => {
                    console.error('Failed to send message:', err);
                    alert('Failed to send message, please try again later.');
                });
        } else {
            setError(errorMessage);
        }
    };

    return (
        <section id="contact">
            <div className='contact-section'>
                <div className='container'>
                    <div className='contact-content'>
                        <div className='left-content'>
                            <h4>Process</h4>
                            <div className='animation-class'>
                                <Fade direction='up'>
                                    <h2>Contact Us. It’s Easy.</h2>
                                </Fade>
                            </div>
                            <p>Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative.</p>

                            <div className='contact-details'>
                                <div className='call'>
                                    <div className='icons'>
                                        <IoCallOutline />
                                    </div>
                                    <div className='details'>
                                        <p>Call Today</p>
                                        <h6><Link to="tel:+1800100900">+1 800 100 900</Link></h6>
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
                                        <h6>195 Devonshire St Boston,<br /> MA 02110</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <form onSubmit={handleSubmit} rel={form}>
                                <div className='form-data'>
                                    <div className='data-1'>
                                        <div className="form_full_name">
                                            <label className="fullname">
                                                Full Name <span className='mandatory'>*</span>
                                            </label>
                                            <input
                                                className="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                            {error.fullName && <p className='error'>{error.fullName}</p>}
                                        </div>
                                        <div className="form_phone">
                                            <label className="phone">
                                                Phone <span className='mandatory'>*</span>
                                            </label>
                                            <input
                                                className="phone_number"
                                                type="tel"
                                                placeholder="+008 654 231"
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {error.phone && <p className='error'>{error.phone}</p>}
                                        </div>
                                    </div>
                                    <div className='data-2'>
                                        <div className="email">
                                            <label className="email-address">
                                                Email <span className='mandatory'>*</span>
                                            </label>
                                            <input
                                                className="company details"
                                                type="email"
                                                placeholder="consult@mail.com"
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {error.email && <p className='error'>{error.email}</p>}
                                        </div>
                                        <div className="company">
                                            <label className="company_name">
                                                Company <span className='mandatory'>*</span>
                                            </label>
                                            <input
                                                className="company details"
                                                type="text"
                                                name='company'
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="company.com"
                                            />
                                            {error.company && <p className='error'>{error.company}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className='text-message'>
                                    <label className="message">
                                        Message <span className='mandatory'>*</span>
                                    </label>
                                    <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
                                    {error.message && <p className='error'>{error.message}</p>}
                                </div>
                                <button className="upload-button shine-effect" type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
