import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="contact-info-box footer-part">
                    <ul>
                        <li>San Jin Lai-Kang</li>
                        <li>Phone: <a href="tel:0898-63121067">0898-63121067</a></li>
                        <li>E-Mail: <a href="mailto:san@greenblog.com">san@greenblog.com</a></li>
                    </ul>
                </div>
                <div className="vertical-line"></div>
                <div className="logo-box footer-part">
                    <div className="logo"></div>
                    <div className="socialmedia">
                        <a href="https://www.facebook.com/" target="blank_">
                            <FontAwesomeIcon icon={ faFacebookSquare } />
                        </a>
                        <a href="https://www.instagram.com/" target="blank_">
                            <FontAwesomeIcon icon={ faInstagramSquare }/>
                        </a>
                        <a href="https://www.linkedin.com/" target="blank_">
                            <FontAwesomeIcon icon={ faLinkedin }/>
                        </a>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-nav footer-part">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;