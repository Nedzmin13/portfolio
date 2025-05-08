// src/utils/constants.js
import {
    FaHome, FaUser, FaBriefcase, FaEnvelope,
    FaLinkedin, FaGithub, // Importa icone specifiche
    FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava // Esempi tecnologie
} from 'react-icons/fa';
import { SiVite, SiMysql } from 'react-icons/si';

// ===================================
// ASSICURATI CHE OGNI BLOCCO SIA PRECEDEDUTO DA 'export const'
// ===================================

// Link di navigazione principali (4 icone)
export const navLinks = [
    { id: 'hero', labelKey: 'navbar.home', icon: FaHome },
    // ---> Questa voce "Esperienza" ora punta alla sezione con id="projects" <---
    { id: 'projects', labelKey: 'navbar.experience', icon: FaBriefcase },
    { id: 'about', labelKey: 'navbar.about', icon: FaUser },
    { id: 'contact', labelKey: 'navbar.contact', icon: FaEnvelope },
    // RIMUOVI: { id: '...', labelKey: 'navbar.projects', icon: ... } se era un duplicato
];

// Link LinkedIn
export const linkedinLink = {
    id: 'linkedin',
    labelKey: 'navbar.linkedin',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/nedzmin-cancar-a11b2525b/'
};

// Link GitHub
export const githubLink = {
    id: 'github',
    labelKey: 'navbar.github',
    icon: FaGithub,
    url: 'https://github.com/Nedzmin13' // <<<=== METTI IL TUO URL GITHUB
};

// Tecnologie per la sezione Slider Icone (precedentemente TechShowcase)
export const technologies = [
    { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Vite', icon: SiVite, color: '#646cff' },
    { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Git', icon: FaGitAlt, color: '#f05033' },
    { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    { name: 'Java', icon: FaJava, color: '#007396' },
];

// Titoli rotanti per la Navbar
export const rotatingTitles = [
    'leftSideInfo.title',
    'navbar.mobileDev',
    'navbar.softwareDev',
    'navbar.frontendDev',
    'navbar.digitalStrat'
];

// Dati per i Progetti (per slider immagini e future card)
export const projectsData = [
    {
        id: 'codened-web',
        titleKey: 'projects.codenedWeb.title',
        descriptionKey: 'projects.codenedWeb.description',
        imgSlider: '/images/projects/slider/1.jpg', // Assicurati i path siano corretti
        imgMockup: '/images/projects/mockups/codened.png',
        imgClean: '/images/projects/clean/codened.png', // Placeholder
        tech: ['React', 'CSS', 'Vite'],
        githubUrl: 'https://github.com/Nedzmin13/untitled1.git', // Placeholder
    },
    {
        id: 'shopify-store',
        titleKey: 'projects.shopifyStore.title',
        descriptionKey: 'projects.shopifyStore.description',
        imgSlider: '/images/projects/slider/2.jpg',
        imgMockup: '/images/projects/mockups/shopify.png',
        imgClean: '/images/projects/clean/shopify.png', // Placeholder
        tech: ['Shopify', 'Liquid', 'CSS'],
        githubUrl: null,
    },
    {
        id: 'app-preventivi-java',
        titleKey: 'projects.appPreventiviJava.title',
        descriptionKey: 'projects.appPreventiviJava.description',
        imgSlider: '/images/projects/slider/3.jpg',
        imgMockup: '/images/projects/mockups/app-preventivi.png',
        imgClean: '/images/projects/clean/app-preventivi.png', // Placeholder
        tech: ['Java', 'Swing', 'MySQL'],
        githubUrl: 'https://github.com/Nedzmin13/PreventiviApp.git', // Placeholder
    },
    {
        id: 'app-preventivi-android',
        titleKey: 'projects.appPreventiviAndroid.title',
        descriptionKey: 'projects.appPreventiviAndroid.description',
        imgSlider: '/images/projects/slider/4.jpg',
        imgMockup: '/images/projects/mockups/android-preventivi.png',
        imgClean: '/images/projects/clean/android-preventivi.png', // Placeholder
        tech: ['Java', 'Android', 'SQLite'],
        githubUrl: 'https://github.com/Nedzmin13/preventivi-app.git', // Placeholder
    },
    {
        id: 'codened-mobile',
        titleKey: 'projects.codenedMobile.title',
        descriptionKey: 'projects.codenedMobile.description',
        imgSlider: '/images/projects/slider/5.jpg',
        imgMockup: '/images/projects/mockups/codened2.png',
        imgClean: '/images/projects/clean/codened2.png', // Placeholder
        tech: ['React Native', 'Expo'],
        githubUrl: 'https://github.com/tuo-username/codened-mobile-repo', // Placeholder
    },
    {
        id: 'lilmetal',
        titleKey: 'projects.lilmetal.title',
        descriptionKey: 'projects.lilmetal.description',
        imgSlider: '/images/projects/slider/6.jpg',
        imgMockup: '/images/projects/mockups/lilmetal.png',
        imgClean: '/images/projects/clean/lilmetal.png', // Placeholder
        tech: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/Nedzmin13/LIL-METAL.git', // Placeholder
    },
];