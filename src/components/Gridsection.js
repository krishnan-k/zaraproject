import React from 'react';
import '../component-css/grid.css'
import Gridimage from '../component-images/Gridimage';
const Gridsection = () => {
    return (
        <div className='grid-section'>
            <div className='container'>
                <div className='inner_content_section'>
                    <h3>service</h3>
                    <h2>Get Control Over Your Business I take your finance to next level</h2>

                    <div className='grid-container'>
                        <div className='grid-inner-content'>
                            {Gridimage.map((item) => (
                                <div className='grid-body' key={item.id}>
                                    <img src={item.image} alt='img'/>
                                    <div className='title'>{item.title}</div>
                                    <div className='des'>{item.des}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gridsection;
