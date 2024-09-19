import React, { useEffect, useState, useRef } from 'react';
import Numberimage from '../component-images/Numberimage';
import '../component-css/number.css'
const Numbercounter = () => {
    const CountUpAnimation = ({ initialValue, targetValue }) => {
        const [count, setCount] = useState(initialValue);
        const duration = 4000; // 4 seconds

        useEffect(() => {
            let startValue = initialValue;
            const timingBreak = Math.floor(
                duration / (targetValue - initialValue));

            const counter = setInterval(() => {
                startValue += 1;
                setCount(startValue);
                if (startValue >= targetValue) {
                    clearInterval(counter);
                }
            }, timingBreak);

            return () => {
                clearInterval(counter);
            };
        }, [targetValue, initialValue]);

        return (
            <span className="num">{count}+</span>
        );
    };
    const [counterAnimation, setCounterAnimation] = useState(false);
    const counterRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCounterAnimation(true);
                observer.unobserve(counterRef.current);
            }
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);
    return (
        <div className='number-counter-section' ref={counterRef}>
            <div className='container'>
                <div className='number-counter-content'>
                    {Numberimage.map((item) => (
                        <div className='number-img' key={item.id}>
                            <div className='img-section'>
                                <img src={item.image} alt='image-icon' />
                            </div>
                            <div className='img-content'>
                                <div className='title' >
                                    <CountUpAnimation initialValue={0} targetValue={item.value} counterAnimation={counterAnimation} />
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
