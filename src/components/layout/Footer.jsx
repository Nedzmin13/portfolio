// src/components/layout/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Per i link interni
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Icone social
// Importa il CSS specifico se sposti gli stili del footer qui,
// altrimenti assicurati siano in layout.css

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    // Link social (METTI I TUOI LINK REALI)
    const linkedinUrl = "https://www.linkedin.com/in/nedzmin-cancar-a11b2525b/";
    const githubUrl = "https://github.com/Nedzmin13";

    return (
        <footer className="site-footer">
            <div className="footer-content section-container"> {/* Usa section-container per allineamento */}
                {/* Icone Social */}
                <div className="footer-social-icons">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                        <FaLinkedinIn />
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
                        <FaGithub />
                    </a>
                </div>

                {/* Testo Copyright */}
                <p className="footer-copyright">
                    © {currentYear} Nedzmin Cancar. {t('footer.rightsReserved')}
                </p>

                {/* Link Policy */}
                <nav className="footer-policy-links">
                    <Link to="/privacy-policy" className="footer-policy-link">{t('footer.privacyPolicy')}</Link>
                    <span className="footer-policy-separator">|</span>
                    <Link to="/cookie-policy" className="footer-policy-link">{t('footer.cookiePolicy')}</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;