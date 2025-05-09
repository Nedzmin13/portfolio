import React from 'react';
import Navbar from './Navbar';
import Hero from '../sections/Hero';
import TechShowcase from '../sections/TechShowcase';
import Contact from '../sections/Contact.jsx';
import ProjectsSlider from "../sections/ProjectsSlider.jsx";
import ProjectsGrid from "../sections/ProjectsGrid.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="main-content-area">
                <Hero />
                <TechShowcase />
                <ProjectsGrid />
                <ProjectsSlider />
                <AboutSection />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;