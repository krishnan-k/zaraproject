import React from 'react'
import '../component-css/imagegrid.css'
import Gridbox from '../component-images/Gridbox'
import { FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
const Imagegrid = () => {
    const gridBoxArea = document.querySelector('.image-box-content');
    if (gridBoxArea) {
        const gridInnerBox = gridBoxArea.querySelectorAll('.image-box');
        gridInnerBox.forEach(item => {
            item.addEventListener("mouseover", () => {
                gridInnerBox.forEach(section => {
                    section.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    }
    const galleryPopup = (index) => {
        const gallerySection = document.getElementById(`gallery_popup_${index}`);
        const overlay = document.getElementById('overlay');
        if (gallerySection) {
            const popup = document.querySelector('.gallery-popup-section');
            if (popup) {
                popup.style.display = 'flex';
                overlay.style.display = 'block';
                gallerySection.classList.add('active');
                gallerySection.style.zIndex = '3';
                const closeBtn = document.getElementById(`close${index}`);
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        popup.style.display = 'none';
                        overlay.style.display = 'none';
                        gallerySection.classList.remove('active');
                        gallerySection.style.zIndex = '0';
                    });
                }
            }
        }
    }
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
                            <button type='button' className='service shine-effect'>more gallery</button>
                        </div>
                    </div>


                </div>
                <div className='img-box'>
                    <div className='image-box-content'>
                        {Gridbox.map((item, index) => (
                            <div key={item.id} className='image-box'>
                                <div className='img-section'>
                                    <button id={`gallery_apply_btn_${index}`} className='gallery-btn' type="button" onClick={() => galleryPopup(index)}><FaPlus /></button>
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
            </div>
            <div id="overlay" className="overlay"></div>
            {Gridbox.map((item, index) => (
                <div id={`gallery_popup_${index}`} className='gallery-popup' key={item.id}>
                    <div className='gallery-popup-section'>
                        <button id={`close${index}`} name="Close" className="gallery-btn-close">
                            <IoClose />
                        </button>
                        <div className='left-content'>
                            <img src={item.image} alt={item.alt} />
                            <div className='title'><h2>{item.title}</h2></div>
                            <div className='des'><h4>{item.des}</h4></div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Imagegrid
