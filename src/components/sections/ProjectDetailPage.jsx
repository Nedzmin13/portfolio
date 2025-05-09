import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../../utils/constants'; // Importa dati



const ProjectDetailPage = () => {
    const { projectId } = useParams(); // Ottiene l'ID del progetto dall'URL
    const { t } = useTranslation();

    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        return (
            <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
                <h2>{t('projects.notFound')}</h2>
                <Link to="/">← {t('projects.backToHome')}</Link>
            </div>
        );
    }

    const title = t(project.titleKey);
    const description = t(project.descriptionKey);

    return (
        // Aggiungi un layout base per la pagina dettaglio
        <div style={{ paddingTop: '100px', color: 'white', maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
            {/* Link per tornare indietro */}
            <Link to="/" style={{ color: 'var(--accent-cyan)', marginBottom: '2rem', display: 'inline-block' }}>
                ← {t('projects.backToHome')}
            </Link>

            <h1>{title}</h1>
            <img src={project.imgMockup} alt={title} style={{ width: '100%', maxWidth: '500px', margin: '2rem auto', display: 'block', borderRadius: '8px' }} />
            <p>{description}</p>

            <p style={{ marginTop: '2rem' }}><strong>{t('projects.technologiesUsed')}:</strong> {project.tech.join(', ')}</p>

            {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', display: 'inline-block', marginTop: '1rem' }}>
                    {t('projects.githubLink')}
                </a>
            )}
        </div>
    );
};

export default ProjectDetailPage;