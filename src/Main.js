import React from "react";
import ReactDOM from "react-dom";
import './scss/main.scss';
import WelcomeSection from './components/WelcomeSection';
import AboutBlogSection from './components/AboutBlogSection';
import AboutMeSection from './components/AboutMeSection';
import ServicesSection from './components/ServicesSection';
import OpinionsSection from './components/OpinionsSection';

const Main = () => {
    return (
        <>
            <WelcomeSection />
            <AboutBlogSection />
            <AboutMeSection />
            <ServicesSection />
            <OpinionsSection />
        </>
    );
};

export default Main;