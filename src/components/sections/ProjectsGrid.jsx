// src/components/sections/ProjectsGrid.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
// ---> IMPORTA DALLA POSIZIONE CORRETTA <---
import ProjectCard from './ProjectCard'; // Assumendo che sia nella stessa cartella 'sections'
import { projectsData } from '../../utils/constants';

// Importa il CSS specifico
import './ProjectsGrid.css';

const ProjectsGrid = () => {
    const { t } = useTranslation();

    return (
        <section className="projects-grid-section section-container" id="projects">
            <h2 className="projects-grid__title">{t('projects.sectionTitle')}</h2>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;