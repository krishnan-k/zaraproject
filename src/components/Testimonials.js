import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import Carouselimg from '../component-images/Carouselimg';
import '../component-css/testimonials.css'
const Testimonials = () => {
    return (
        <div className='testimonial-section'>
            <div className='container'>
                <div className='inner_content_section'>
                    <h3>client feedback</h3>
                </div>
                <Swiper spaceBetween={10} navigation={true} modules={[Navigation]} grabCursor={true}>
                    {Carouselimg.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='title'>{item.title}</div>
                                <img src={item.image} alt='img' />
                                <div className='author-name'>
                                    {item.authorName}
                                </div>
                                <div className='desgination'>{item.desginatin}</div>
                            </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
