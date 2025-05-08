import React from 'react';
import { motion } from 'framer-motion';
// CSS viene importato in index.css

const ButtonNeon = ({ children, onClick, href, download, className = '', type = 'button', disabled = false }) => {
    const motionProps = {
        whileHover: { scale: 1.05, boxShadow: "0 0 15px rgba(0, 198, 255, 0.5)" },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
    };

    const buttonClasses = `button-neon ${className}`;

    if (href) {
        return (
            <motion.a
                href={href} download={download} className={buttonClasses}
                target={download ? '_self' : '_blank'} rel={download ? '' : 'noopener noreferrer'}
                {...motionProps}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type} className={buttonClasses} onClick={onClick} disabled={disabled}
            {...motionProps}
            // Stile per bottone disabilitato
            style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            {children}
        </motion.button>
    );
};
export default ButtonNeon;