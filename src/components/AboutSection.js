import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import aboutImage from '../assets/images/about-image.jpg';
import aboutImage2x from '../assets/images/about-image@2x.jpg';

function AboutSection({ aboutRef }) {

    const showMore = useRef();
    const [showDetails, setShowDetails] = useState(false);
    const [style, setStyle] = useState({})

    const handleDetails = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
        const el = showMore.current;
        if (!el) return;

        if (showDetails) {
            const scrollHeight = el.scrollHeight;
            setStyle({ maxHeight: scrollHeight + "px" });

            const timer = setTimeout(() => {
            el.style.overflow = "visible";
            }, 800); 

            return () => clearTimeout(timer);
        } else {
            el.style.overflow = "hidden";
            setStyle({ maxHeight: "0px" });
        }
    }, [showDetails])

    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title about-section__title" ref={aboutRef}>about</h2>
                <div className="about-section__container">
                    <div className="about-section__text-container">
                        <h3 className="about-section__h3text">I'm Natali</h3>
                        <p className="about-section__text">A licensed esthetician with a focus on gentle yet effective skincare.</p>
                        <div className="about-section__more-details-container" style={style} ref={showMore}>
                            <p className="about-section__text">My approach combines clinical knowledge with personalized treatment plans and home care recommendations to support healthy, balanced, and radiant skin — especially for sensitive concerns like acne, rosacea, and pigmentation.</p>
                            <p className="about-section__text">Each treatment is carried out with care, precision, and attention to detail — because your skin is unique and deserves the very best.</p>
                        </div>
                        <button className="about-section__button" onClick={handleDetails}>{showDetails ? "Close details" : "More details"} {<IoIosArrowUp className={`about-section__btn-icon ${showDetails ? '' : 'down'}`} />}</button>
                        <p className="about-section__text about-section__text--limited">My approach combines clinical knowledge with personalized treatment plans and home care recommendations to support healthy, balanced, and radiant skin — especially for sensitive concerns like acne, rosacea, and pigmentation.</p>
                        <p className="about-section__text about-section__text--limited">Each treatment is carried out with care, precision, and attention to detail — because your skin is unique and deserves the very best.</p>
                    </div>
                    <img src={aboutImage}
                        srcSet={`${aboutImage} 1x, ${aboutImage2x} 2x`}
                        className="about-section__img"
                        alt="Жінка п'є каву"
                        draggable="false" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;