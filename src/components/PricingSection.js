import pricingLogo from '../assets/images/pricing-logo.png';
import pricingLogo2x from '../assets/images/pricing-logo@2x.png';

function PricingSection({pricingRef}) {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-section__title section-title" ref={pricingRef}>Pricing</h2>
                <div className="pricing-section__container">
                    <div className="pricing-section__first-cont">
                        <h3 className="pricing-section__h3">Price List</h3>
                    </div>
                    <div className="pricing-section__second-cont">
                        <img className="pricing-section__logo"
                            src={pricingLogo}
                            srcSet={`${pricingLogo} 1x, ${pricingLogo2x} 2x`}
                            alt="Логотип VONO" />
                            <div className="pricing-section__list">
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Hydrodermabrasion Facia</div>
                                    <div className="pricing-section__cell">60 min</div>
                                    <div className="pricing-section__cell">$150</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Deep Cleansing Facia</div>
                                    <div className="pricing-section__cell">90 min</div>
                                    <div className="pricing-section__cell">$130</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Customized Facial</div>
                                    <div className="pricing-section__cell">60 min</div>
                                    <div className="pricing-section__cell">$90</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Customized Facial</div>
                                    <div className="pricing-section__cell">90 min</div>
                                    <div className="pricing-section__cell">120$</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Acne Facial</div>
                                    <div className="pricing-section__cell">60-70 min</div>
                                    <div className="pricing-section__cell">110$</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Rosacea Facial</div>
                                    <div className="pricing-section__cell">60 min</div>
                                    <div className="pricing-section__cell">110$</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Carboxy Therapy</div>
                                    <div className="pricing-section__cell">60 min</div>
                                    <div className="pricing-section__cell">110$</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Facial Massage</div>
                                    <div className="pricing-section__cell">60 min</div>
                                    <div className="pricing-section__cell">65$</div>
                                </div>
                                <div className="pricing-section__row">
                                    <div className="pricing-section__cell">Peel</div>
                                    <div className="pricing-section__cell"></div>
                                    <div className="pricing-section__cell">$100-$150</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default PricingSection;