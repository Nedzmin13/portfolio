// src/pages/CookiePolicyPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './PolicyPage.css'; // Usa lo stesso CSS

const CookiePolicyPage = () => {
    const { t } = useTranslation();
    return (
        <div className="policy-page-container section-container">
            <Link to="/" className="back-to-home-link">← {t('common.backToHome')}</Link>
            <h1 className="policy-title">{t('cookiePolicy.sectionTitle')}</h1>
            <p className="policy-last-updated">{t('cookiePolicy.lastUpdated')}</p>

            <div className="policy-content">
                <h2>{t('cookiePolicy.whatAreCookiesTitle')}</h2>
                <p>{t('cookiePolicy.whatAreCookiesContent')}</p>

                <h2>{t('cookiePolicy.technicalCookiesTitle')}</h2>
                <p>{t('cookiePolicy.technicalCookiesContent')}</p>

                <h2>{t('cookiePolicy.consentTitle')}</h2>
                <p>{t('cookiePolicy.consentContent')}</p>

                <h2>{t('cookiePolicy.moreInfoTitle')}</h2>
                <p>{t('cookiePolicy.moreInfoContent')}</p>
            </div>
        </div>
    );
};
export default CookiePolicyPage;