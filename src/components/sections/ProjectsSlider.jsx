// src/components/sections/ProjectsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// NON importare Autoplay o FreeMode, gestiamo con CSS
// import { Autoplay, FreeMode } from 'swiper/modules';

// Importa solo lo stile base di Swiper
import 'swiper/css';

// Importa i dati dei progetti
import { projectsData } from '../../utils/constants';

// Importa il CSS specifico
import './ProjectsSlider.css';

const ProjectsSlider = () => {
    // Duplica i dati per l'animazione CSS infinita
    const sliderData = [...projectsData, ...projectsData];

    return (
        <section className="projects-visual-slider" id="projects-visual">
            <Swiper
                // Nessun modulo necessario qui per questo effetto
                // modules={[]}
                slidesPerView={'auto'}     // Cruciale: si adatta alla larghezza delle slide CSS
                // spaceBetween={30}       // Lo spazio ora è gestito dal margin nel CSS
                loop={false}               // Il loop è gestito dall'animazione CSS
                // freeMode={false}        // Non serve freeMode
                allowTouchMove={false}    // Disabilita interazione touch/drag
                // autoplay={...}          // Non usare autoplay di Swiper
                // speed={...}             // Non usare speed di Swiper
                className="projectsVisualSwiper" // Classe per applicare stile e animazione al wrapper
            >
                {sliderData.map((project, index) => (
                    // Aggiungi key unica per React
                    <SwiperSlide key={`${project.id}-${index}-${Math.random()}`} className="project-visual-slide">
                        <img
                            src={project.imgSlider}
                            alt={`Visual for project ${project.id}`}
                            className="projects-slider-image"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProjectsSlider;