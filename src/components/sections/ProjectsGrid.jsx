
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/constants';

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