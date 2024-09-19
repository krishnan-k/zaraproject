import React from 'react'
import '../component-css/blog.css'
import Blogcontent from '../component-images/Blogcontent'
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Fade } from 'react-awesome-reveal';
const Blog = () => {
  const autoplay = {
    delay: 5000,
    disableOnInteraction: false,
  };
  const pagination = {
    clickable: true,
  }
  return (
    <section id="blog">
      <div className='blog-content-section'>
        <div className='container'>
          <div className='inner-content'>
            <div className='left-content'>
              <h4>blog</h4>
              <div className='animation-class'>
                <Fade direction='up'>
                  <h2>Take a look at our latest articles & resources
                  </h2>
                </Fade>
              </div>
            </div>
            <div className='right-content'>
              <button type='button' className='service shine-effect'>more news</button>
            </div>
          </div>

          <div className='blog-sec'>
            <Swiper spaceBetween={30}
              slidesPerView={3}
              pagination={pagination}
              autoplay={autoplay}
              navigation={true}
              modules={[Navigation, Autoplay, Pagination]}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                577: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {Blogcontent.map((item) => (
                <SwiperSlide key={item.id} className='blog-post'>
                  <div className='image shine-effect'>
                    <img src={item.image} alt='blog-image' />
                  </div>
                  <div className='blog-inner-content'>
                    <div className='title'>{item.title}</div>
                    <div className='des'>{item.des}</div>
                  </div>
                  <div className='author'>
                    <div className='author-image'>
                      <img src={item.authorImage} alt='author-image' />
                      <div className='author_name'>{item.name}</div>
                    </div>
                    <div className='blog-date'>
                      {item.date}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
