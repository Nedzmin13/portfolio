// src/components/sections/TechShowcase.jsx
import React from 'react';
// Rimuovi useTranslation se non serve più qui
import { technologies } from '../../utils/constants';
import { motion } from 'framer-motion';

const TechShowcase = () => {
    // Rimuovi t se non usato
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <motion.section
            // Rinominiamo la classe e ID per chiarezza
            className="tech-slider-section section-container"
            id="tech-slider" // Nuovo ID
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Rimosso il div .tech-showcase__content-box che conteneva tutto */}
            {/* Ora solo il wrapper dello slider */}
            <div className="tech-slider__wrapper"> {/* Nuova classe per lo slider */}
                <div className="tech-slider__content">
                    {duplicatedTechnologies.map((tech, index) => (
                        <div key={`${tech.name}-${index}`} className="tech-slider__icon-item" title={tech.name}>
                            {/* Usa nuove classi per le icone dello slider */}
                            <tech.icon className="tech-slider__icon" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TechShowcase;