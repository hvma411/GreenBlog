import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-scroll';

const WelcomeSection = () => {
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="logo-box"></div>
                <div className="photo-txt-box">
                    <div className="photo__box">
                        <div className="photo"></div>
                    </div>
                    <div className="txt__box">
                        <h1>Cupcake ipsum dolor sit amet gummies.</h1>
                        <div className="short-line"></div>
                        <h2>Topping chupa chups bear claw shortbread tiramisu.</h2>
                    </div>
                </div>
            </div>
            <div className="white-cut">
                <div className="container reducer">
                    <div className="button-box">
                        <div className="short-line"></div>
                        <Link to="about-blog" smooth="true" duration={500}>
                            <button>Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;