import { useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

import serviceImage1 from '../assets/images/services-image-list-1.jpg';
import serviceImage1x2 from '../assets/images/services-image-list-1@2x.jpg';
import serviceImage2 from '../assets/images/services-image-list-2.png';
import serviceImage2x2 from '../assets/images/services-image-list-2@2x.png';
import serviceImage3 from '../assets/images/services-image-list-3.jpg';
import serviceImage3x2 from '../assets/images/services-image-list-3@2x.jpg';
import serviceImage4 from '../assets/images/services-image-list-4.png';
import serviceImage4x2 from '../assets/images/services-image-list-4@2x.png';
import serviceImage5 from '../assets/images/services-image-list-5.jpg';
import serviceImage5x2 from '../assets/images/services-image-list-5@2x.jpg';
import serviceImage6 from '../assets/images/services-image-list-6.png';
import serviceImage6x2 from '../assets/images/services-image-list-6@2x.png';
import serviceImage7 from '../assets/images/services-image-list-7.jpg';
import serviceImage7x2 from '../assets/images/services-image-list-7@2x.jpg';
import serviceImage8 from '../assets/images/services-image-list-8.png';
import serviceImage8x2 from '../assets/images/services-image-list-8@2x.png';
import serviceImage9 from '../assets/images/services-image-list-9.jpg';
import serviceImage9x2 from '../assets/images/services-image-list-9@2x.jpg';
import serviceImage10 from '../assets/images/services-image-list-10.png';
import serviceImage10x2 from '../assets/images/services-image-list-10@2x.png';
import serviceImage11 from '../assets/images/services-image-list-11.jpg';
import serviceImage11x2 from '../assets/images/services-image-list-11@2x.jpg';
import serviceImage12 from '../assets/images/services-image-list-12.png';
import serviceImage12x2 from '../assets/images/services-image-list-12@2x.png';
import serviceImage13 from '../assets/images/services-image-list-13.jpg';
import serviceImage13x2 from '../assets/images/services-image-list-13@2x.jpg';
import serviceImage14 from '../assets/images/services-image-list-14.png';
import serviceImage14x2 from '../assets/images/services-image-list-14@2x.png';
import serviceImage15 from '../assets/images/services-image-list-15.jpg';
import serviceImage15x2 from '../assets/images/services-image-list-15@2x.jpg';
import serviceImage16 from '../assets/images/services-image-list-16.png';
import serviceImage16x2 from '../assets/images/services-image-list-16@2x.png';
import serviceImage17 from '../assets/images/services-image-list-17.jpg';
import serviceImage17x2 from '../assets/images/services-image-list-17@2x.jpg';


function ServicesSection({servicesRef, openModal}) {

    const newList = useRef();
    const lastTooltipRef = useRef();
    const [list, setList] = useState(false);
    const [style, setStyle] = useState({})
    const [activeTooltip, setActiveTooltip] = useState(null);

    useEffect(() => {
        const el = newList.current;
        if (!el) return;

        if (list) {
            const scrollHeight = el.scrollHeight;
            setStyle({ maxHeight: scrollHeight + "px" });

            // після анімації → overflow: visible
            const timer = setTimeout(() => {
            el.style.overflow = "visible";
            }, 800); // як і transition

            return () => clearTimeout(timer);
        } else {
            // повертаємо hidden
            el.style.overflow = "hidden";
            setStyle({ maxHeight: "0px" });
        }
    }, [list]);

    const handleListClick = () => {
        setList(!list);
    };
    
    const handleToolTipClick = (index) => {
        setActiveTooltip(activeTooltip === index ? null : index);
    }

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-section__container">
                    <div className="services-section__title-container" ref={servicesRef}>
                        <h2 className="services-section__title">services</h2>
                        <button onClick={handleListClick} className="services-section__btn">More services {<IoIosArrowUp className={`services-section__btn-icon ${list ? 'down' : ''}`} />}</button>
                    </div>
                    <div className="services-section__list-container">
                        <ul className="services-section__list-items">
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage1} 1x, ${serviceImage1x2} 2x`}
                                    src={serviceImage1}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-blue">
                                <img className="services-section__logo limited"
                                    srcSet={`${serviceImage2} 1x, ${serviceImage2x2} 2x`}
                                    src={serviceImage2}
                                    draggable="false" />
                                <p className="services-section__price-text">$90 (60 min) $120 (90 min)</p>
                                <button onClick={() => handleToolTipClick(2)} className={`services-section__item-btn ${activeTooltip === 2 ? 'show-white' : ''}`}>More Information</button>
                                    <div className={`tool-tip pink ${activeTooltip === 2 ? 'show' : ''}`}>
                                        <p>A fully personalized facial designed around your skin’s unique needs.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Skin analysis</li>
                                            <li>Exfoliation (enzyme or acid-<span className='tool-tip__indent'>based peel)</span></li>
                                            <li>Targeted serum and mask</li>
                                            <li>LED therapy</li>
                                            <li>Home care recommendations</li>
                                        </ul>
                                        <p>Perfect for: those seeking a tailored approach and visible results.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage3} 1x, ${serviceImage3x2} 2x`}
                                    src={serviceImage3}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink">
                                <img className="services-section__logo"
                                    srcSet={`${serviceImage4} 1x, ${serviceImage4x2} 2x`}
                                    src={serviceImage4}
                                    draggable="false" />
                                <p className="services-section__price-text">$110 (60 min)</p>
                                <button onClick={() => handleToolTipClick(4)} className={`services-section__item-btn ${activeTooltip === 4 ? 'show-pink' : ''}`}>More Information</button>
                                    <div className={`tool-tip blue ${activeTooltip === 4 ? 'show' : ''}`}>
                                        <p>A calming treatment that reduces redness, strengthens the skin barrier, and relieves sensitivity.</p>
                                        <ul className='tool-tip__list'> 
                                            <li>Gentle exfoliation</li>
                                            <li>Anti-inflammatory mask</li>
                                            <li>Cooling serums</li>
                                            <li>Restorative ingredients</li>
                                        </ul>
                                        <p>Perfect for: skin with rosacea, couperose, or heightened sensitivity.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage5} 1x, ${serviceImage5x2} 2x`}
                                    src={serviceImage5}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink">
                                <img className="services-section__logo"
                                    srcSet={`${serviceImage6} 1x, ${serviceImage6x2} 2x`}
                                    src={serviceImage6}
                                    draggable="false" />
                                <p className="services-section__price-text">$150 (60 min)</p>
                                <button onClick={() => handleToolTipClick(6)} className={`services-section__item-btn ${activeTooltip === 6 ? 'show-pink' : ''}`}>More Information</button>
                                    <div className={`tool-tip blue ${activeTooltip === 6 ? 'show' : ''}`}>
                                        <p>A comprehensive device-based treatment that combines gentle skin resurfacing, vacuum pore cleansing, and infusion of active serums.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Light exfoliation</li>
                                            <li>Vacuum pore cleansing</li>
                                            <li>Deep hydration and <span className='tool-tip__indent'>nourishment</span></li>
                                            <li>Soothing mask</li>
                                            <li>Home care recommendations</li>
                                        </ul>
                                        <p>Perfect for: dull, dehydrated, uneven, or combination skin. A painless alternative to classic deep cleansing with an instant glow effect.</p>
                                    </div>
                            </li>
                        </ul>
                        <ul ref={newList} style={style} className='services-section__list-items-show'>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage7} 1x, ${serviceImage7x2} 2x`}
                                    src={serviceImage7}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-blue">
                                <img className="services-section__logo limited"
                                    srcSet={`${serviceImage8} 1x, ${serviceImage8x2} 2x`}
                                    src={serviceImage8}
                                    draggable="false" />
                                <p className="services-section__price-text">$130 (90 min)</p>
                                <button onClick={() => handleToolTipClick(8)} className={`services-section__item-btn ${activeTooltip === 8 ? 'show-white' : ''}`}>More Information</button>
                                    <div className={`tool-tip pink ${activeTooltip === 8 ? 'show' : ''}`}>
                                        <p>An intensive treatment focused on clearing pores, reducing inflammation, and regulating oil production.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Pore-softening mask to <span className='tool-tip__indent'>prep</span> the skin</li>
                                            <li>Manual extractions</li>
                                            <li>Calming mask</li>
                                            <li>High frequency or LED</li>
                                        </ul>
                                        <p>Perfect for: blackheads, clogged pores, and oily skin.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage9} 1x, ${serviceImage9x2} 2x`}
                                    src={serviceImage9}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink">
                                <img className="services-section__logo"
                                    srcSet={`${serviceImage10} 1x, ${serviceImage10x2} 2x`}
                                    src={serviceImage10}
                                    draggable="false" />
                                <p className="services-section__price-text">$110 (60 min)</p>
                                <button onClick={() => handleToolTipClick(10)} className={`services-section__item-btn ${activeTooltip === 10 ? 'show-pink' : ''}`}>More Information</button>
                                    <div className={`tool-tip blue ${activeTooltip === 10 ? 'show' : ''}`}>
                                        <p>A targeted treatment to reduce inflammation, control breakouts, and restore skin balance.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Enzyme peel</li>
                                            <li>Antibacterial ingredients</li>
                                            <li>High frequency (Darsonval)</li>
                                            <li>Calming mask + LED therapy</li>
                                        </ul>
                                        <p>Perfect for: acne-prone, oily, inflamed, or breakout-prone skin.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage11} 1x, ${serviceImage11x2} 2x`}
                                    src={serviceImage11}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink">
                                <img className="services-section__logo"
                                    srcSet={`${serviceImage12} 1x, ${serviceImage12x2} 2x`}
                                    src={serviceImage12}
                                    draggable="false" />
                                <p className="services-section__price-text">$110 (60 min)</p>
                                <button onClick={() => handleToolTipClick(12)} className={`services-section__item-btn ${activeTooltip === 12 ? 'show-pink' : ''}`}>More Information</button>
                                    <div className={`tool-tip blue ${activeTooltip === 12 ? 'show' : ''}`}>
                                        <p>Procedure for skin rejuvenation and healing, based on the non-injection introduction of carbon dioxide (CO₂).</p>
                                        <ul className='tool-tip__list'>
                                            <li>Gel application</li>
                                            <li>Activation</li>
                                            <li>CO₂ penetration</li>
                                        </ul>
                                        <p>As a result, skin tone improves, wrinkles are smoothed out, pigmentation and post-acne are reduced, and age-related changes are prevented.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage13} 1x, ${serviceImage13x2} 2x`}
                                    src={serviceImage13}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-blue">
                                <img className="services-section__logo limited"
                                    srcSet={`${serviceImage14} 1x, ${serviceImage14x2} 2x`}
                                    src={serviceImage14}
                                    draggable="false" />
                                <p className="services-section__price-text">$65 (50 min)</p>
                                <button onClick={() => handleToolTipClick(14)} className={`services-section__item-btn ${activeTooltip === 14 ? 'show-white' : ''}`}>More Information</button>
                                    <div className={`tool-tip pink ${activeTooltip === 14 ? 'show' : ''}`}>
                                        <p>A lymphatic facial massage that boosts circulation and gently lifts facial contours.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Skin preparation</li>
                                            <li> Manual massage</li>
                                            <li>Customized mask based on <span className='tool-tip__indent'>your skin’s needs</span></li>
                                            <li>Healthy glow as a result</li>
                                        </ul>
                                        <p>Perfect for: tired, puffy, or stressed skin.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage15} 1x, ${serviceImage15x2} 2x`}
                                    src={serviceImage15}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink">
                                <img className="services-section__logo"
                                    srcSet={`${serviceImage16} 1x, ${serviceImage16x2} 2x`}
                                    src={serviceImage16}
                                    draggable="false" />
                                <p className="services-section__price-text">$100–$175</p>
                                <button onClick={() => handleToolTipClick(16)} className={`services-section__item-btn ${activeTooltip === 16 ? 'show-pink' : ''}`}>More Information</button>
                                    <div ref={lastTooltipRef} className={`tool-tip blue ${activeTooltip === 16 ? 'show' : ''}`}>
                                        <p>A targeted exfoliating treatment to smooth skin texture and even out tone.</p>
                                        <ul className='tool-tip__list'>
                                            <li>Skin preparation</li>
                                            <li>Acid-based peel</li>
                                            <li>Post-treatment care <span className='tool-tip__indent'>guidance</span></li>
                                        </ul>
                                        <p>Perfect for: acne, pigmentation, fine lines, uneven tone, and signs of aging.</p>
                                    </div>
                            </li>
                            <li className="services-section__item img">
                                <img className="services-section__img"
                                    srcSet={`${serviceImage17} 1x, ${serviceImage17x2} 2x`}
                                    src={serviceImage17}
                                    draggable="false" />
                            </li>
                            <li className="services-section__item color-pink limited">
                                <button className="services-section__item-btn limited" onClick={openModal}>Consultation</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;