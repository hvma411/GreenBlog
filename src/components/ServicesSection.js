import React from "react";
import ReactDOM from "react-dom";
import {
  Link,
} from 'react-router-dom';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container section-wrapper">
                <h2>Cupcake ipsum dolor sit amet cupcake</h2>
                <div className="underline"></div>
                <div className="services-box">
                    <div className="service">
                        <h4>Tiramisu</h4>
                        <div className="service__img1"></div>
                        <h5>Bonbon dessert marshmallow jelly beans liquorice dragée fruitcake.</h5>
                        <ul>
                            <li><strong>Chupa</strong> chups I love tootsie roll</li>
                            <li>Jelly beans danish macaroon</li>
                            <li><strong>Lemon</strong> jujubes gummies bear claw donut</li>
                        </ul>
                    </div>
                    <div className="service promoted">
                        <h4>Apple pie</h4>
                        <div className="service__img1"></div>
                        <h5>Muffin caramels liquorice oat cake oat.</h5>
                        <ul>
                            <li><strong>Chupa</strong> chups I love tootsie roll</li>
                            <li>Jelly beans danish macaroon</li>
                            <li><strong>Lemon</strong> jujubes gummies bear claw donut</li>
                            <li>Jelly beans danish macaroon</li>
                        </ul>
                    </div>
                    <div className="service">
                        <h4>Lollipop</h4>
                        <div className="service__img1"></div>
                        <h5>Bonbon dessert marshmallow jelly beans.</h5>
                        <ul>
                            <li><strong>Chupa</strong> chups I love tootsie roll</li>
                            <li>Jelly beans danish macaroon</li>
                            <li><strong>Lemon</strong> jujubes gummies bear claw donut</li>
                        </ul>
                    </div>
                </div>
                <Link to="/services">
                    <button>Read more</button>
                </Link>
            </div>
        </section>
    );
};

export default ServicesSection;