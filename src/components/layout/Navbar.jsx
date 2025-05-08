// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react'; // Rimosso useRef
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaHome, FaUser, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub,
    FaGlobeAmericas // Icona globo
} from 'react-icons/fa';
// Importa SOLO le costanti che servono ora (navLinks, social, ecc. NON rotatingTitles)
import { navLinks, linkedinLink, githubLink } from '../../utils/constants';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [activeLink, setActiveLink] = useState('hero'); // Stato per link attivo

    // ---> RIMOSSO State ed Effect per titolo rotante <---
    // const [titleIndex, setTitleIndex] = useState(0);
    // useEffect(() => { ... titolo rotante ... }, []);
    // const titleVariants = { ... };

    // Funzione scroll/link
    const handleNavClick = (link) => {
        if (link.url) { // Gestisce link esterni (LinkedIn/GitHub)
            window.open(link.url, '_blank', 'noopener noreferrer');
            return;
        }
        // Gestisce scroll interno
        const element = document.getElementById(link.id);
        if (element) {
            const navbarHeight = 70; // O 60 per mobile? Meglio leggerla dinamicamente se cambia
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            // Potremmo impostare activeLink qui, ma lo scroll è più affidabile
            // setActiveLink(link.id);
        } else {
            console.warn(`Element with id '${link.id}' not found for scroll.`);
        }
    };

    // Effetto per aggiornare link attivo durante lo scroll
    useEffect(() => {
        const handleScroll = () => {
            // Trova l'ID della sezione più vicina alla parte superiore/centrale del viewport
            let currentBestId = 'hero'; // Default
            const scrollThreshold = window.innerHeight * 0.4; // Punto di attivazione (40% dall'alto)

            // Considera tutte le sezioni linkate nella navbar
            const sectionsToCheck = navLinks.map(link => link.id);
            // Aggiungi manualmente altri ID importanti se non sono nei navLinks principali
            // sectionsToCheck.push('about', 'contact'); // Esempio

            sectionsToCheck.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Attiva se la parte superiore della sezione entra nella soglia
                    if (rect.top <= scrollThreshold && rect.bottom >= scrollThreshold) {
                        currentBestId = id;
                    }
                    // Caso speciale per l'inizio pagina (Hero)
                    else if (id === 'hero' && window.scrollY < window.innerHeight * 0.5) {
                        currentBestId = 'hero';
                    }
                    // Caso speciale per la fine pagina (Contact)
                    else if (id === 'contact' && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // 100px di tolleranza alla fine
                        currentBestId = 'contact';
                    }
                }
            });
            setActiveLink(currentBestId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true }); // Usa passive listener per performance
        handleScroll(); // Esegui subito per stato iniziale corretto

        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]); // Esegui se navLinks cambia (improbabile ma corretto)

    // Funzione per cambiare lingua
    const toggleLanguage = () => {
        const nextLanguage = (i18n.language || 'it').startsWith('it') ? 'en' : 'it';
        i18n.changeLanguage(nextLanguage);
    };
    const currentLanguage = i18n.language || 'it';


    return (
        // La navbar ora ha justify-content: center su mobile (dal CSS)
        // e space-between su desktop (dal CSS base)
        <nav className="navbar">
            {/* ---> LOGO RIMOSSO <--- */}
            {/* <div className="navbar__logo"> ... </div> */}

            {/* Contenitore unico per la navigazione centrale */}
            <div className="navbar__main-navigation-container">
                <div className="navbar__navigation">
                    {/* Icone Navigazione */}
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
                    {/* Divisore */}

                    {/* Icone Social */}
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
                    {/* Icona Lingua */}
                    <motion.button
                        key="language-toggle"
                        className="navbar__link navbar__link--language"
                        onClick={toggleLanguage}
                        aria-label={t('navbar.changeLanguage')}
                        title={t('navbar.changeLanguage')}
                        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                        // style={{ color: currentLanguage === 'en' ? 'var(--accent-cyan)' : 'var(--text-secondary)' }} // Stile attivo lingua opzionale
                    >
                        <FaGlobeAmericas />
                    </motion.button>
                </div>
            </div>

            {/* Rimosso navbar__right-elements e i suoi figli (switcher desktop/mobile) */}

        </nav>
    );
};

export default Navbar;