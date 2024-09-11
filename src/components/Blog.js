import React from 'react'
import '../component-css/blog.css'
import Blogcontent from '../component-images/Blogcontent'
const Blog = () => {
  return (
    <div className='blog-content-section'>
      <div className='container'>
        <div className='inner-content'>
          <div className='left-content'>
            <h4>blog</h4>
            <h2>Take a look at our latest articles & resources
            </h2>
          </div>
          <div className='right-content'>
            <button type='button' className='service'>more news</button>
          </div>
        </div>

        <div className='blog-sec'>
          {Blogcontent.map((item) => (
            <div key={item.id} className='blog-post'>
              <div className='image'>
                <img src={item.image} alt='' />
              </div>
              <div className='blog-inner-content'>
                <div className='title'>{item.title}</div>
                <div className='des'>{item.des}</div>
              </div>
              <div className='author'>
                <div className='author-image'>
                  <img src={item.authorImage} alt='author'/>
                  <div className='author_name'>{item.name}</div>
                </div>
                <div className='blog-date'>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
