import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaGlobeAmericas
} from 'react-icons/fa';
import { navLinks, linkedinLink, githubLink } from '../../utils/constants';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [activeLink, setActiveLink] = useState('hero');


    // Funzione scroll/link
    const handleNavClick = (link) => {
        if (link.url) {
            window.open(link.url, '_blank', 'noopener noreferrer');
            return;
        }
        const element = document.getElementById(link.id);
        if (element) {
            const navbarHeight = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        } else {
            console.warn(`Element with id '${link.id}' not found for scroll.`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentBestId = 'hero'; // Default
            const scrollThreshold = window.innerHeight * 0.4;

            const sectionsToCheck = navLinks.map(link => link.id);

            sectionsToCheck.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= scrollThreshold && rect.bottom >= scrollThreshold) {
                        currentBestId = id;
                    }

                    else if (id === 'hero' && window.scrollY < window.innerHeight * 0.5) {
                        currentBestId = 'hero';
                    }

                    else if (id === 'contact' && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // 100px di tolleranza alla fine
                        currentBestId = 'contact';
                    }
                }
            });
            setActiveLink(currentBestId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();


        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const toggleLanguage = () => {
        const nextLanguage = (i18n.language || 'it').startsWith('it') ? 'en' : 'it';
        i18n.changeLanguage(nextLanguage);
    };
    const currentLanguage = i18n.language || 'it';


    return (

        <nav className="navbar">

            <div className="navbar__main-navigation-container">
                <div className="navbar__navigation">
                    {navLinks.map((link) => (
                        <motion.button
                            key={link.id}
                            className={`navbar__link ${activeLink === link.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(link)}
                            aria-label={t(link.labelKey)}
                            whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                        >
                            <link.icon />
                        </motion.button>
                    ))}

                    <motion.button
                        key={linkedinLink.id}
                        className="navbar__link"
                        onClick={() => handleNavClick(linkedinLink)}
                        aria-label={t(linkedinLink.labelKey)}
                        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    >
                        <linkedinLink.icon />
                    </motion.button>
                    <motion.button
                        key={githubLink.id}
                        className="navbar__link"
                        onClick={() => handleNavClick(githubLink)}
                        aria-label={t(githubLink.labelKey)}
                        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    >
                        <githubLink.icon />
                    </motion.button>
                    <motion.button
                        key="language-toggle"
                        className="navbar__link navbar__link--language"
                        onClick={toggleLanguage}
                        aria-label={t('navbar.changeLanguage')}
                        title={t('navbar.changeLanguage')}
                        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    >
                        <FaGlobeAmericas />
                    </motion.button>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;