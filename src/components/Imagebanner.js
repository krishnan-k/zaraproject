import React from 'react'
import '../component-css/imagebanner.css'
import { PiNotepadLight } from 'react-icons/pi'
import { Fade } from 'react-awesome-reveal'
import businessVideo from '../images/video.mp4';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
const Imagebanner = () => {
    return (
        <div className='image-section'>
            <Swiper spaceBetween={10} navigation={true} modules={[Navigation]} grabCursor={true}>
                <SwiperSlide>
                    <div className='image_banner_section'>
                        <div className='video-section'>
                            <video src={businessVideo} autoPlay muted loop false />
                        </div>
                        <div className='container'>

                            <div className='inner-content'>
                                <div className='animation-class'>
                                    <Fade direction='up'>
                                        <h2>
                                            Your small business
                                            growth advisors
                                        </h2>
                                    </Fade>
                                </div>
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
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Imagebanner
