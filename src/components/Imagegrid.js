import React from 'react'
import '../component-css/imagegrid.css'
import Gridbox from '../component-images/Gridbox'
const Imagegrid = () => {
    return (
        <>
            <div className='image-grid-section'>
                <div className='container'>
                    <div className='inner-content'>
                        <div className='left-content'>
                            <h3>process</h3>
                            <h2>Our client, global analytical techno company, wanted to build market.</h2>
                        </div>
                        <div className='right-content'>
                            <button type='button' className='service'>more gallery</button>
                        </div>
                    </div>


                </div>
            </div>
            <div className='img-box'>
                <div className='image-box-content'>
                    {Gridbox.map((item) => (
                        <div key={item.id} className='image-box'>
                            <div className='img-section'>
                                <img src={item.image} alt={item.alt} />
                            </div>
                            <div className='inner-content'>
                                <div className='title'>{item.title}</div>
                                <div className='des'>{item.des}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Imagegrid
