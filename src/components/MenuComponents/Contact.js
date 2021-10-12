import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

    emailjs.init("user_qOIj9Qy1Tn8QXzZd70ei6")

    const [contactForm, setContactForm] = useState({
        fullName: "",
        emailAddress: "",
        guestMessage: "",
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const sendMessage = () => {
        const errors = [];

        if (contactForm.fullName === "" || contactForm.fullName.length < 2) {
            errors.push("wrongName");
            document.querySelector(".wrongName").style.display = "block";
        };

        if (validateEmail(contactForm.emailAddress) === false) {
            errors.push("wrongEmail");
            document.querySelector(".wrongEmail").style.display = "block";
        };

        if (contactForm.guestMessage.length < 10) {
            errors.push('wrongMessage');
            document.querySelector(".wrongMessage").style.display = "block";
        };

        if (contactForm.fullName === "" && contactForm.emailAddress === "" && contactForm.guestMessage === "") {
            errors.push("emptyForm");
            document.querySelector(".emptyForm").style.display = "block";
            document.querySelector(".wrongName").style.display = "none";
            document.querySelector(".wrongEmail").style.display = "none";
            document.querySelector(".wrongMessage").style.display = "none";
        };

        // if (errors.length < 1) {

        //     emailjs.send("service_4fwm234", "template_bx41vgk", {
        //         from_name: contactForm.fullName,
        //         message: contactForm.guestMessage,
        //         guest_email: contactForm.emailAddress,
        //         guest_name: contactForm.fullName,
        //         reply_to: contactForm.emailAddress,
        //     })
        //     .then(response => {
        //         document.querySelector(".messageInfo").style.display = "block";

        //         const classClear = setTimeout(() => {
        //             document.querySelector(".messageInfo").style.display = "none";
        //         }, 1500);

        //         setContactForm({
        //             fullName: "",
        //             emailAddress: "",
        //             guestMessage: "",
        //         })
                
        //         console.log("Success", response.status, response.text)

        //     }, error => {
        //         console.log(error.text)
        //     })
        // };
    };
    
    const handleFormChange = (e) => {
        e.persist();
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        sendMessage();
    }

    useEffect(() => {
        if (contactForm.fullName.length > 2) {
            document.querySelector(".wrongName").style.display = "none";
        };
        if (validateEmail(contactForm.emailAddress) === true) {
            document.querySelector(".wrongEmail").style.display = "none";
        };
        if (contactForm.guestMessage.length > 9) {
            document.querySelector(".wrongMessage").style.display = "none";
        }
        if (contactForm.fullName.length > 0 || contactForm.emailAddress.length > 0 || contactForm.guestMessage.length > 0) {
            document.querySelector(".emptyForm").style.display = "none";
        }
    }, [contactForm])

    return (
        <section className="contact">
            <div className="container contact__page">
                <h3 className="section__title">CONTACT WITH ME</h3>
                <span className="underline"></span>
                <div className="page-box">
                    <div className="form-box">
                        <h4>My contact details:</h4>
                        <div className="contact__details">
                            <div className="detail-box">
                                <h5>PHONE:</h5>
                                <p><a href="tel:0898-63121067">0898-63121067</a></p>
                            </div>
                            <div className="detail-box">
                                <h5>E-MAIL:</h5>
                                <p><a href="mailto:san@greenblog.com">san@greenblog.com</a></p>
                            </div>
                        </div>
                        <h4>My socialmedia:</h4>
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
                        <form>
                            <h4>Text me:</h4>
                            <input type="text" name="fullName" value={ contactForm.fullName } onChange={ handleFormChange } placeholder="Your name..." />
                            <input type="text" name="emailAddress" value={ contactForm.emailAddress } onChange={ handleFormChange } placeholder="Your email address..." />
                            <textarea name='guestMessage' value={ contactForm.guestMessage } onChange={ handleFormChange } placeholder="Your message..." />
                            <div className="button-box">
                                <div className="errors-box">
                                    <span className="wrongName">I'd like to know your real name</span>
                                    <span className="wrongEmail">Please correct your email address</span>
                                    <span className="wrongMessage">Your message is to short (minimum 10 characters)</span>
                                    <span className="emptyForm">Please complete all fields correctly (message should be 10 characters long at least)</span>
                                    <span className="messageInfo">Message has been sent</span>
                                </div>
                                <button onClick={ handleButtonClick }>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="img-box"></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;