import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();
    const {
        id, // Lo teniamo per la key nel .map()
        titleKey,
        descriptionKey,
        imgMockup,
        // imgClean,
        tech,
        githubUrl
    } = project;

    const title = t(titleKey);
    const description = t(descriptionKey);

    const cardVariants = { /* ... */ };

    return (
        <motion.div className="project-card-wrapper" /* ... */ >
            <div className="project-card__image-area">
                <img src={imgMockup} alt={`${title} - Mockup Progetto`} className="project-card__image project-card__image--mockup" loading="lazy" />
            </div>

            <div className="project-card__content-area">
                {tech && Array.isArray(tech) && tech.length > 0 && (
                    <div className="project-card__tech-list">
                        {tech.map((techName) => ( <span key={techName} className="project-card__tech-item">{techName}</span> ))}
                    </div>
                )}
                <h3 className="project-card__title">{title}</h3>

                <div className="project-card__description-link-wrapper">
                    <p className="project-card__description">{description}</p>
                    <div className="project-card__links">
                        {githubUrl && ( <a href={githubUrl} /* ... */ > <FaGithub /> </a> )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default ProjectCard;