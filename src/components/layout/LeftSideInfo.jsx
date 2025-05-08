import React from 'react';
// ---> AGGIUNGI QUESTA RIGA <---
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LeftSideInfo = () => {
    // ---> AGGIUNGI QUESTA RIGA <---
    const { t } = useTranslation('leftSideInfo'); // Usa il namespace se definito nel json

    return (
        <aside className="left-side-info">
            <div className="left-side-info__header">
                {/* Usa la funzione t() */}
                <span className="left-side-info__name">{t('name')}</span>
                <span className="left-side-info__title">{t('title')}</span>
            </div>
            {/* ... resto del componente ... */}
            <div className="left-side-info__socials">
                {/* ... icone social ... */}
            </div>
        </aside>
    );
};

export default LeftSideInfo;