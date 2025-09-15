import { PiInstagramLogoThin } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import footerLogo from '../assets/images/footer-logo.png'
import footerLogox2 from '../assets/images/footer-logo@2x.png'

function Footer() {
    
    const handleUp = () => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__all-container">
                    <div className="footer__container">
                        <img className="footer__logo"
                            srcSet={`${footerLogo} 1x, ${footerLogox2} 2x`}
                            src={footerLogo}
                            alt="footer-logo"></img>
                        <address className="footer__address-container">
                            <ul className="footer__address">
                                <li className="footer__link-first">contacs</li>
                                <li className="footer__link-two">+19803392269</li>
                                <li className="footer__link-third">10614 Providence Rd, Charlotte,<br/> 
                                NC 28277 suite 13</li>
                                <li ><PiInstagramLogoThin className="footer__instagram"/></li>
                            </ul>
                        </address>
                        <p className="footer__text">refine your natural glow</p>
                        <button onClick={handleUp} className="footer__button-up"><IoIosArrowUp className="footer__button-icon-up"/></button>
                    </div>
                    <address className="footer__address-container-mobile">
                        <ul className="footer__address">
                            <li className="footer__link-first">contacs</li>
                            <li className="footer__link-two">+19803392269</li>
                            <li className="footer__link-third">10614 Providence Rd, Charlotte,<br/> 
                            NC 28277 suite 13</li>
                            <li ><PiInstagramLogoThin className="footer__instagram"/></li>
                        </ul>
                    </address>    
                </div>  
            </div>
        </footer>
    );
}

export default Footer;