// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './PolicyPage.css'; // Crea questo file per lo stile

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();
    return (
        <div className="policy-page-container section-container">
            <Link to="/" className="back-to-home-link">← {t('common.backToHome')}</Link>
            <h1 className="policy-title">{t('privacyPolicy.sectionTitle')}</h1>
            <p className="policy-last-updated">{t('privacyPolicy.lastUpdated')}</p>

            <div className="policy-content">
                <p>{t('privacyPolicy.introduction')}</p>

                <h2>{t('privacyPolicy.dataControllerTitle')}</h2>
                <p>{t('privacyPolicy.dataControllerContent')}</p>

                <h2>{t('privacyPolicy.dataCollectedTitle')}</h2>
                <p>{t('privacyPolicy.dataCollectedContent')}</p>

                <h2>{t('privacyPolicy.purposeTitle')}</h2>
                <p>{t('privacyPolicy.purposeContent')}</p>

                <h2>{t('privacyPolicy.storageTitle')}</h2>
                <p>{t('privacyPolicy.storageContent')}</p>

                <h2>{t('privacyPolicy.rightsTitle')}</h2>
                <p>{t('privacyPolicy.rightsContent')}</p>

                <h2>{t('privacyPolicy.changesTitle')}</h2>
                <p>{t('privacyPolicy.changesContent')}</p>
            </div>
        </div>
    );
};
export default PrivacyPolicyPage;