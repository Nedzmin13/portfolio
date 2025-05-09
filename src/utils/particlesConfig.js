const particlesConfig = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
        },
    },
    particles: {
        color: { value: "#a0a0b0" },
        links: {
            color: "#303050",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
        },
        collisions: { enable: false },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.5, // Lente
            straight: false,
        },
        number: {
            density: { enable: true, area: 800 },
            value: 60, // Un po' di più
        },
        opacity: {
            value: 0.4,
            random: true,
        },
        shape: { type: "circle" },
        size: {
            value: { min: 1, max: 3 },
            random: true,
        },
    },
    detectRetina: true,
};
export default particlesConfig;