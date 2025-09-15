import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import BurgerMenu from './BurgerMenu';
import logo from '../assets/images/logo.png';
import logo2x from '../assets/images/logo@2x.png';

function Header({ refs }) {
    const [about, services, results, pricing, contact] = refs;

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(true);
    }

    const handleCloseMenu = () => {
        setShowMenu(false);
    }

    return (
        <div className='header'>
            <div className="container">
                <div className="header__container">
                    <ul className='header__left'>
                        <li><a className='header__link-left' href='/'>Home</a></li>
                        <li><a className='header__link-left' href='#' onClick={() => about.current.scrollIntoView({behavior: 'smooth'})}>About</a></li>
                        <li><a className='header__link-left' href='#' onClick={() => services.current.scrollIntoView({behavior: 'smooth'})} >Services</a></li>
                    </ul>
                    <a href="/">
                        <img className='header__logo'
                            src={logo}
                            srcSet={`${logo} 1x, ${logo2x} 2x`}
                            alt="логотип VONA" />
                    </a>
                    <ul className='header__right'>
                        <li><a className='header__link-right' href='#' onClick={() => results.current.scrollIntoView({behavior: 'smooth'})}>Results</a></li>
                        <li><a className='header__link-right' href='#' onClick={() => pricing.current.scrollIntoView({behavior: 'smooth'})}>Pricing</a></li>
                        <li><a className='header__link-right' href='#' onClick={() => contact.current.scrollIntoView({behavior: 'smooth'})}>Contact</a></li>
                    </ul>
                    <CiMenuFries className='header__burger-menu-icon' onClick={handleShowMenu} />
                    <BurgerMenu handleCloseMenu={handleCloseMenu} showMenu={showMenu} refs={refs} />
                </div>    
            </div>
        </div>
    );
};

export default Header;