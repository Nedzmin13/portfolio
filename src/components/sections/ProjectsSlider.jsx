import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';

import { projectsData } from '../../utils/constants';

import './ProjectsSlider.css';

const ProjectsSlider = () => {
    const sliderData = [...projectsData, ...projectsData];

    return (
        <section className="projects-visual-slider" id="projects-visual">
            <Swiper

                slidesPerView={'auto'}
                loop={false}
                allowTouchMove={false}
                className="projectsVisualSwiper"
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