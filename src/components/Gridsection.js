import React, { useState } from 'react';
import '../component-css/grid.css'
import Gridimage from '../component-images/Gridimage';
import { Fade } from 'react-awesome-reveal';
const Gridsection = () => {
    const [activeState, setActiveState] = useState(1);
    const handleMouseOver = (index) => {
        setActiveState(index)
    }
    return (
        <section id="service">
            <div className='grid-section'>
                <div className='container'>
                    <div className='inner_content_section'>
                        <h3>service</h3>
                        <div className='animation-class'>
                            <Fade direction='up'>
                                <h2>Get Control Over Your Business I take your finance to next level</h2>
                            </Fade>
                        </div>

                        <div className='grid-container'>
                            <div className='grid-inner-content'>
                                {Gridimage.map((item, index) => (
                                    <div className={`grid-body ${activeState === index ? 'active' : ''}`} key={item.id} onMouseOver={() => handleMouseOver(index)}>
                                        <img src={item.image} alt='grid-image' />
                                        <div className='title'>{item.title}</div>
                                        <div className='des'>{item.des}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gridsection;
