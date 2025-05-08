import React from 'react';
// ---> AGGIUNGI/VERIFICA QUESTA RIGA <---
import { useTranslation } from 'react-i18next';
import { technologies } from '../../utils/constants';

const TechStack = () => {
    // ---> AGGIUNGI/VERIFICA QUESTA RIGA <---
    const { t } = useTranslation('techStack'); // Namespace opzionale

    return (
        <section className="tech-stack-section section-container" id="techstack">
            {/* ---> USA t() QUI <--- */}
            <h2 className="section-title">{t('title')}</h2>
            <div className="tech-stack__container">
                {/* ... map delle tecnologie ... */}
                {technologies.map(({ name, icon: Icon, color }) => (
                    <div key={name} className="tech-stack__item" title={name}>
                        <Icon className="tech-stack__icon" style={{ '--icon-color': color }} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;