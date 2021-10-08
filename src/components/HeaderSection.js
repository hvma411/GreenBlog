import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  Link,
  NavLink,
} from 'react-router-dom';
import FooterSection from './FooterSection';
import { SearchEngineContext } from '../App';

const HeaderSection = () => {

    let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos == 0 ) {
            document.querySelector('header').style.top = "0"
        } else if (prevScrollpos > currentScrollPos) {
            document.querySelector('header').style.top = "0";
        } else if (window.innerWidth < 1024) {
            document.querySelector('header').style.top = "0";
        } else {
            document.querySelector('header').style.top = "-65px"
        }
        prevScrollpos = currentScrollPos
    }

    const handleMobileNavClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerNav = document.querySelector('.hamburger-nav');
        const body = document.querySelector('body');

        hamburger.classList.toggle('hamburger--active');
        hamburgerNav.classList.toggle('hamburger-nav--active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    const searchContext = useContext(SearchEngineContext)

    const openSearchBox = () => {
        searchContext.setIsModalVisible(true)
    }
    
    return (
        <header>
            <div className="hamburger-nav">
                <ul>
                    <li><NavLink onClick={handleMobileNavClick} exact to="/" activeStyle={{ color: '#eff5ee' }}>HOME</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/articles" activeStyle={{ color: '#eff5ee'  }}>ARTICLES</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/recipes" activeStyle={{ color: '#eff5ee'  }}>RECIPES</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/services" activeStyle={{ color: '#eff5ee' }}>SERVICES</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/about" activeStyle={{ color: '#eff5ee' }}>ABOUT</NavLink></li>
                    <li><NavLink onClick={handleMobileNavClick} to="/contact" activeStyle={{ color: '#eff5ee' }}>CONTACT</NavLink></li>
                    <li className="search" onClick={ openSearchBox }>SEARCH</li>
                </ul>
                <FooterSection />
            </div>
            <div className="reducer-line"></div>
            <nav className="main-nav container">
                <Link to="/" className="mobile-logo"/>
                <HamburgerMenu />
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/articles">ARTICLES</Link></li>
                    <li><Link to="/recipes">RECIPES</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li onClick={ openSearchBox }>SEARCH</li>
                </ul>
            </nav>
            <div className="reducer-line"></div>
        </header>
    );
};

const HamburgerMenu = () => {
    const handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerNav = document.querySelector('.hamburger-nav');
        const body = document.querySelector('body');
        
        hamburger.classList.toggle('hamburger--active');
        hamburgerNav.classList.toggle('hamburger-nav--active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    }

    return (
        <button className="hamburger" onClick={ handleHamburgerClick }>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
    );
};

export default HeaderSection;