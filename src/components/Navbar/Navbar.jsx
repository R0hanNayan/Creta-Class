import React from 'react';
import './navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Icon from '../../assets/navbar-icon.png';
import Logo from '../../utils/Logo/Logo';
import contact from '../../assets/contact.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Logo />
            </div>
            <div className='navbar-menu'>
                <AnchorLink href="#about">
                    <button className='navbar-menu-btn'>About <img src={Icon} alt='Icon'/></button>
                </AnchorLink>
                <AnchorLink href="#math">
                    <button className='navbar-menu-btn'>Math <img src={Icon} alt='Icon'/></button>
                </AnchorLink>
            </div>
            <img className='navbar-contact' src={contact} alt="phone" />
            <button className='navabr-book-btn'>Book a FREE Trial</button>
        </div>
    )
}

export default Navbar