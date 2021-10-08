import React from "react";
import ReactDOM from "react-dom";
import {
  Link,
} from 'react-router-dom';


const AboutMeSection = () => {
    return (
        <section className="about-me-section">
            <div className="container photo-text-box">
                <div className="photo__box">
                    <div className="photo"></div>
                </div>
                <div className="text__box">
                    <div className="medium-line"></div>
                    <h2>Cupcake ipsum dolor sit amet bonbon tiramisu</h2>
                    <h4>Cupcake ipsum dolor sit amet brownie. Pie jelly beans shortbread cookie soufflé pastry jelly-o chocolate cake.</h4>
                    <p>&nbsp; Icing soufflé toffee jelly beans cookie lemon drops sweet soufflé. Candy canes sugar plum pudding jujubes oat cake sweet roll apple pie cheesecake. I love I love lemon drops I love tart lemon drops. Icing pastry I love pudding oat cake powder tart cookie sweet roll. I love gummi bears apple pie sweet ice cream I love toffee jujubes gingerbread.
                    Jelly-o wafer pastry halvah fruitcake. Ice cream sweet pudding sweet roll danish. I love dragée halvah lollipop tiramisu. Danish pastry I love candy cake gummi bears.
                    </p>
                    <Link to="/about">
                        <button>Read more</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;