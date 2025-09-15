import { IoClose } from "react-icons/io5";
import pricingLogo from '../assets/images/pricing-logo.png';
import pricingLogo2x from '../assets/images/pricing-logo@2x.png';

function BurgerMenu({ handleCloseMenu, showMenu, refs }) {
    
    const [about, services, results, pricing, contact] = refs

    return (
        <div className={`burger-menu ${showMenu ? 'show-menu' : ''}`}>
            <div className="burger-menu__header">
                <a href="/">
                    <img className='burger-menu__logo'
                        src={pricingLogo}
                        srcSet={`${pricingLogo} 1x, ${pricingLogo2x} 2x`}
                        alt="логотип VONA" />
                </a>
                <IoClose className="burger-menu__btn-close" onClick={handleCloseMenu}/>
            </div>
            <ol className="burger-menu__list">
                <li><a href="#" onClick={() => { window.scrollTo({ left: 0, top: 0, behavior: 'smooth' }); handleCloseMenu()}}>Home</a></li>
                <li><a href="#" onClick={() => {about.current.scrollIntoView({behavior: 'smooth'}); handleCloseMenu()}}>About</a></li>
                <li><a href="#" onClick={() => {services.current.scrollIntoView({behavior: 'smooth'}); handleCloseMenu()}}>Servises</a></li>
                <li><a href="#" onClick={() => {results.current.scrollIntoView({behavior: 'smooth'}); handleCloseMenu()}}>Results</a></li>
                <li><a href="#" onClick={() => {pricing.current.scrollIntoView({ behavior: 'smooth'}); handleCloseMenu()}}>Pricing</a></li>
                <li><a href="#" onClick={() => {contact.current.scrollIntoView({behavior: 'smooth'}); handleCloseMenu()}}>Contact</a></li>
            </ol>
        </div>
    );
}

export default BurgerMenu;