import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from 'react-icons/fa';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => { i18n.changeLanguage(lng); };
    const currentLanguage = i18n.language || 'it';

    return (
        <div className="language-switcher">
            <FaGlobeAmericas className="language-switcher__icon" aria-hidden="true" />
            <button
                onClick={() => changeLanguage('it')}
                disabled={currentLanguage.startsWith('it')}
                className={currentLanguage.startsWith('it') ? 'active' : ''}
                aria-pressed={currentLanguage.startsWith('it')}
            >
                IT
            </button>
            <span className="separator" aria-hidden="true">|</span>
            <button
                onClick={() => changeLanguage('en')}
                disabled={currentLanguage.startsWith('en')}
                className={currentLanguage.startsWith('en') ? 'active' : ''}
                aria-pressed={currentLanguage.startsWith('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;