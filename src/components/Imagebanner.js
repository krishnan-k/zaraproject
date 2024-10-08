import React from 'react'
import '../component-css/imagebanner.css'
import { PiNotepadLight } from 'react-icons/pi'
import { Fade } from 'react-awesome-reveal'
import businessVideo from '../images/video.mp4';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
const Imagebanner = () => {
    const pagination = {
        clickable: true,
    }
    // const autoplay = {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // };
    return (
        <section id="home">
            <div className='image-section'>
                <Swiper spaceBetween={10} navigation={true} pagination={pagination}
                    modules={[Navigation, Autoplay, Pagination]}
                    // autoplay={autoplay}
                    grabCursor={true}>
                    <SwiperSlide>
                        <div className='image_banner_section'>
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
                                        <button type='button' className='service shine-effect'><a href='#service'>our service</a></button>
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
                                        <button type='button' className='service shine-effect'><a href='#service'>our service</a></button>
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
                    <SwiperSlide>
                        <div className='image_banner_section'>
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
        </section>
    )
}

export default Imagebanner
