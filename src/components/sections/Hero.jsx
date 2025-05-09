import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonNeon from '../common/ButtonNeon';

const Hero = () => {
    const { t } = useTranslation();

    const handleScrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const navbarHeight = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        } else {
            console.warn("Elemento con id 'contact' non trovato per lo scroll.");
        }
    };

    return (
        <section className="hero-section section-container" id="hero">
            {/* Testo Introduttivo */}
            <div className="intro-text">
                <p className="intro-text__greeting">
                    {t('techShowcase.greeting')}
                </p>
                <h2 className="intro-text__headline">
                    {t('techShowcase.headlinePart1')}
                    <span className="intro-text__headline--highlight">
                        {t('techShowcase.headlinePart2')}
                    </span>
                </h2>
            </div>

            {/* Bottoni e Badge */}
            <div className="hero__buttons">
                <ButtonNeon href="/public/cv/cancarNedzmin.pdf" download>
                    {t('hero.cvButton')}
                </ButtonNeon>
                {/* Questo bottone chiama handleScrollToContact */}
                <ButtonNeon onClick={handleScrollToContact}>
                    {t('hero.contactButton')}
                </ButtonNeon>
            </div>
            <div className="hero__availability-badge">
                {t('hero.status')}
            </div>
        </section>
    );
};
export default Hero;