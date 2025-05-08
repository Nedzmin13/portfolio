// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Hero from '../sections/Hero';           // <<<=== CONTIENE TESTO E BOTTONI
import TechShowcase from '../sections/TechShowcase'; // <<<=== CONTIENE SOLO SLIDER ICONE
import Contact from '../sections/Contact.jsx';
import ProjectsSlider from "../sections/ProjectsSlider.jsx";
import ProjectsGrid from "../sections/ProjectsGrid.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import Footer from "./Footer.jsx";
// ... altri import ...

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="main-content-area">
                <Hero />          {/* 1. Testo Intro + Bottoni/Badge */}
                <TechShowcase />  {/* 2. Slider Icone Tecnologie */}
                <ProjectsGrid />
                <ProjectsSlider />

                <AboutSection />
                <Contact />       {/* 3. Contatti e resto */}
                {/* <Experience /> */}
                {/* <Projects />   */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;