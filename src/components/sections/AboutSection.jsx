// src/components/sections/AboutSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <motion.section
            className="about-section section-container"
            id="about" // ID per navigazione
            initial={{ opacity: 0, y: 20 }} // Leggera animazione da sotto
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Attiva quando 20% è visibile
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="about-section__title">{t('aboutMe.sectionTitle')}</h2>

            <div className="about-content-wrapper">
                <div className="about-text-box">
                    <p>{t('aboutMe.bioParagraph1')}</p>
                    <p>{t('aboutMe.bioParagraph2')}</p>
                    <p>{t('aboutMe.bioParagraph3')}</p>
                    <p>{t('aboutMe.bioParagraph4')}</p>
                </div>
                {/* Qui potresti aggiungere una foto in futuro */}
            </div>
        </motion.section>
    );
};

export default AboutSection;