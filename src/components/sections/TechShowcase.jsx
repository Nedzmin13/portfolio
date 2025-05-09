import React from 'react';
import { technologies } from '../../utils/constants';
import { motion } from 'framer-motion';

const TechShowcase = () => {
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <motion.section
            className="tech-slider-section section-container"
            id="tech-slider" // Nuovo ID
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >

            <div className="tech-slider__wrapper"> 
                <div className="tech-slider__content">
                    {duplicatedTechnologies.map((tech, index) => (
                        <div key={`${tech.name}-${index}`} className="tech-slider__icon-item" title={tech.name}>
                            <tech.icon className="tech-slider__icon" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TechShowcase;