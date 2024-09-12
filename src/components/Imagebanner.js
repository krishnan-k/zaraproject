import React from 'react'
import '../component-css/imagebanner.css'
import { PiNotepadLight } from 'react-icons/pi'
const Imagebanner = () => {
    return (
        <div className='image-section'>
            <div className='image_banner_section'>
                <div className='container'>
                    <div className='inner-content'>
                        <h2>
                            Your small business
                            growth advisors
                        </h2>
                        <p>
                            Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.
                        </p>
                        <div className='buttons'>
                            <button type='button' className='service shine-effect'>our service</button>
                            <button type='button' className='book_date shine-effect'>
                                <span className='book_appoinment'>
                                    <span className='calender'>
                                        <PiNotepadLight /></span>
                                    book a meeting
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imagebanner
