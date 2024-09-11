import React from 'react';
import Numberimage from '../component-images/Numberimage';
import '../component-css/number.css'
const Numbercounter = () => {
    return (
        <div className='number-counter-section'>
            <div className='container'>
                <div className='number-counter-content'>
                    {Numberimage.map((item) => (
                        <div className='number-img' key={item.id}>
                            <div className='img-section'>
                                <img src={item.image} alt='img' />
                            </div>
                            <div className='img-content'>
                                <div className='title'>
                                    {item.value}
                                </div>
                                <div className='description'>
                                    {item.des}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Numbercounter;
