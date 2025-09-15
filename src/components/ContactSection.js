import contactImage from '../assets/images/contact-image.jpg'
import contactImagex2 from '../assets/images/contact-image@2x.jpg'

function ContactSection({contactRef}) {
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
                    <div className="contact-section__form">
                        <h3 className="contact-section__form-title">Leave your contacts for consultation</h3>
                            <div className="contact-section__form-input-container">
                                <input className="contact-section__form-input" type="text" placeholder="Name"/>
                                <input className="contact-section__form-input" type="text" placeholder="Phone number"/>
                            </div>
                        <button className="contact-section__form-btn">Make an appointment</button>
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default ContactSection;