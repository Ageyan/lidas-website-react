import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { MdOutlineDone } from "react-icons/md";
import contactImage from '../assets/images/contact-image.jpg'
import contactImagex2 from '../assets/images/contact-image@2x.jpg'

function ContactSection({ contactRef }) {

    const {input, addUsers, secondInput, setSecondInput, setInput, isPostLoading, error, secondError, setSecondError, setError, addDone} = useFetch('users')

    const [showDone, setShowDone] = useState(false);
    
    useEffect(() => {
        if (addDone) {
            setShowDone(true);
            const timer = setTimeout(() => setShowDone(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [addDone])

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
        if (error) setError("");
    };

    const onChangeHandlerSecond = (e) => {
        const value = e.target.value;
        setSecondInput(value);
        if (secondError) setSecondError("");
    };
    
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-section__container" ref={contactRef}>
                    <h2 className="contact-section__title section-title">Contact</h2>
                    <img className="contact-section__img"
                        srcSet={`${contactImage} 1x, ${contactImagex2} 2x`}
                        src={contactImage}
                        alt="Лице жінки з квіткою"
                        draggable="false" />
                    <form className="contact-section__form" onSubmit={(e) => { e.preventDefault(); addUsers()}}>
                        <h3 className="contact-section__form-title">Leave your contacts for consultation</h3>
                            <input className="contact-section__form-input" value={input} onChange={onChangeHandler} type="text" placeholder="Name" />
                                {error && <p className="error-message">{error}</p>}
                            <input className="contact-section__form-input" value={secondInput} onChange={onChangeHandlerSecond} type="text" placeholder="Phone number" />
                                {secondError && <p className="error-message">{secondError}</p>}
                        <button disabled={isPostLoading} className="contact-section__form-btn">{isPostLoading ? "Loading..." : "Make an appointment"}</button>
                        <div className={`done-message ${addDone ? 'visible' : ''}`}>Done<MdOutlineDone/></div>
                    </form>   
                </div>
            </div>
        </section>
    )
}

export default ContactSection;