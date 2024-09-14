import React, { useState } from 'react'
import '../component-css/contact.css'
import { CiClock2, CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState({});
    const formValidation = (name, value) => {
        let newErrors = '';
        if (name === 'fullName') {
            if (!value) newErrors = 'user name is required';
        } else if (name === 'email') {
            if (!value) newErrors = 'Email is required'
            else if (!/\S+@\S+\.\S+/.test(value)) {
                newErrors = 'Email is invalid'
            }
        }
        else if (name === 'phone') {
            if (!value) newErrors = 'Phone number is required';
        }
        return newErrors;
    }



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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMessage = {
            fullName: formValidation('fullName', formData.fullName),
            email: formValidation('email', formData.email),
            phone: formValidation('phone', formData.phone)
        }
        if (Object.values(errorMessage).every(error => !error)) {
            console.log('Form data is valid', formData);
            alert('Form is valid')
        }
        else {
            setError(errorMessage);
            console.log("Form is invalid", formData)
        }
    }


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
                        <form onSubmit={handleSubmit}>
                            <div className='form-data'>
                                <div className='data-1'>
                                    <div className="form_full_name">
                                        <label className="fullname">
                                            full name <span className='mandatory'>*</span>
                                        </label>
                                        <input
                                            className="name"
                                            type="text"
                                            placeholder="enter your name"
                                            name='fullName'
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                        {error.fullName && (<p className='error'>{error.fullName}</p>)}
                                    </div>
                                    <div className="form_phone">
                                        <label className="phone">
                                            phone <span className='mandatory'>*</span>
                                        </label>
                                        <input
                                            className="phone_number"
                                            type="number"
                                            placeholder="+008 654 231"
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {error.phone && (<p className='error'>{error.phone}</p>)}
                                    </div>
                                </div>
                                <div className='data-2'>
                                    <div className="email">
                                        <label className="email-addres">
                                            email <span className='mandatory'>*</span>
                                        </label>
                                        <input
                                            className="company details"
                                            type="text"
                                            placeholder="consult@mail.com"
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {error.email && (<p className='error'>{error.email}</p>)}
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
