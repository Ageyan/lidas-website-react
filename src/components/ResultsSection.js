import { useEffect, useState, useRef } from "react";

import before1 from "../assets/images/result-image-before1.jpg";
import after1 from "../assets/images/result-image-after1.jpg";
import before2 from "../assets/images/result-image-before2.jpg";
import after2 from "../assets/images/result-image-after2.jpg";
import before3 from "../assets/images/result-image-before3.jpg";
import after3 from "../assets/images/result-image-after3.jpg";
import before4 from "../assets/images/result-image-before4.jpg";
import after4 from "../assets/images/result-image-after4.jpg";
import before5 from "../assets/images/result-image-before5.jpg";
import after5 from "../assets/images/result-image-after5.jpg";
import before6 from "../assets/images/result-image-before6.jpg";
import after6 from "../assets/images/result-image-after6.jpg";

function ResultsSection({resultsRef}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const startX = useRef(null);

    // Слідкуємо за розміром вікна браузера
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // свайп влево
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // свайп вправо
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }

    startX.current = null;
  };

    // const imgPath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

    // Підбираємо зображення відповідно ширині 
    let slides = [];
    if (windowWidth < 480) {
        slides = [
            { id: 1, images: [{ src: before1, label: "Before" }, { src: after1, label: "After" }] },
            { id: 2, images: [{ src: before2, label: "Before" }, { src: after2, label: "After" }] },
            { id: 3, images: [{ src: before3, label: "Before" }, { src: after3, label: "After" }] },
            { id: 4, images: [{ src: before4, label: "Before" }, { src: after4, label: "After" }] },
            { id: 5, images: [{ src: before5, label: "Before" }, { src: after5, label: "After" }] },
            { id: 6, images: [{ src: before6, label: "Before" }, { src: after6, label: "After" }] },
        ];
    } else {
        slides = [
            { id: 1, images: [{ src: before1, label: "Before" }, { src: after1, label: "After" }, { src: before2, label: "Before" }, { src: after2, label: "After" }] },
            { id: 2, images: [{ src: before3, label: "Before" }, { src: after3, label: "After" }, { src: before4, label: "Before" }, { src: after4, label: "After" }] },
            { id: 3, images: [{ src: before5, label: "Before" }, { src: after5, label: "After" }, { src: before6, label: "Before" }, { src: after6, label: "After" }] },
        ];
    }

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length);
    // }

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // }


    return (
        <section className="result-section">
            <div className="container" ref={resultsRef}>
                <div className="result-section__container">
                    <div className="result-section__content-container">
                        <h2 className="section-title result-section__title">Results</h2>
                        <div className="slider-container"
                            onTouchStart={windowWidth <= 768 ? handleTouchStart : undefined}
                            onTouchEnd={windowWidth <= 768 ? handleTouchEnd : undefined}>
                            <div className="slider-container__slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {slides.map((slide) => (
                                    <div key={slide.id} className="slider-container__slide">
                                        <div className="slider-container__slide-grid">
                                            {slide.images.map((img, index) => (
                                                <div key={index} className="slider-container__slide-item">
                                                    <img
                                                        src={img.src}
                                                        // srcSet={img.srcSet}
                                                        alt={img.label}
                                                        draggable="false" />
                                                    <div className='slider-container__slide-item-label'>
                                                        <p>{img.label}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <button onClick={prevSlide}>Prev</button>
                            <button onClick={nextSlide}>Next</button> */}
                        </div>
                    </div>
                    <div className="dots">
                        {slides.map((_, index) => (
                            <span
                            key={index}
                            className={`dots__dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultsSection;