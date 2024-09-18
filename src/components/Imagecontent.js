import React from 'react';
import { IoIosHappy } from 'react-icons/io';
import { IoStarSharp } from 'react-icons/io5';
import '../component-css/imagecontent.css'
import rightImage from '../images/image.png'
import { Fade } from 'react-awesome-reveal';
const Imagecontent = () => {
    return (
        <section id="aboutus">
            <div className='image-content-section'>
                <div className='container'>
                    <div className='inner-content-sec'>
                        <div className='left-content'>
                            <h3>about us</h3>
                            <div className='animation-class'>
                                <Fade direction='up'>
                                    <h2>About our consulting agency</h2>
                                </Fade>
                            </div>
                            <p className='sub-content'>Malesuada fames ac turpis egestas. Auctor urna nunc id cursus metus aliquam eleifend.</p>
                            <p className='des'>Laoreet non curabitur gravida arcu ac. Tortor aliquam nulla facilisi cras. Laoreet non curabitur gravida arcu. Et netus et malesuada fames ac turpis egestas sed.</p>
                            <div className='socials'>
                                <div className='happy-customer'>
                                    <div className='business-service'>
                                        <span><IoStarSharp className='star-icon' /></span>
                                        <h5>400+</h5>
                                    </div>
                                    <p className='description'>Business Services </p>
                                </div>
                                <div className='happy-customer'>
                                    <div className='business-service'>
                                        <span><IoIosHappy className='simile-icon' /></span>
                                        <h5>400+</h5>
                                    </div>
                                    <p className='description'>Happy Customer </p>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <img src={rightImage} alt='rightimage' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Imagecontent;
