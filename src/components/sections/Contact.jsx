// src/components/sections/Contact.jsx
import React, { useState, useRef } from 'react'; // Aggiungi useRef
import { useTranslation } from 'react-i18next';
import ButtonNeon from '../common/ButtonNeon';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // <<<=== 1. IMPORTA EMAILJS

const Contact = () => {
    const { t } = useTranslation();
    // ---> 2. AGGIUNGI UN REF PER IL FORM <---
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // '', 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Link social (invariati)
    const whatsappLink = "https://wa.me/+393277661294";
    const emailLink = "mailto:nedzmin.cancar@hotmail.com";
    const linkedinLink = "https://www.linkedin.com/in/nedzmin-cancar-a11b2525b/";

    // ---> 3. MODIFICA handleSubmit <---
    const handleSubmit = (e) => {
        e.preventDefault(); // Impedisce il ricaricamento della pagina
        if (isSubmitting) return; // Previene invii multipli

        setIsSubmitting(true);
        setSubmitStatus('');

        // Parametri per EmailJS - ASSICURATI CHE I NOMI CORRISPONDANO AL TUO TEMPLATE EMAILJS!
        // Solitamente sono {{from_name}}, {{from_email}}, {{message}}, ma controlla il tuo template.
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Nedzmin Cancar', // Puoi aggiungere questo se vuoi nel template
            message: formData.message,
        };

        console.log('Sending email with params:', templateParams); // Log per debug

        emailjs
            .send(
                'service_4adwzq2',    // Il tuo Service ID
                'template_erm8uzy',  // Il tuo Template ID
                templateParams,      // I dati del form mappati ai parametri del template
                'huKwYRdRK6qBxNAXW' // <<<=== La tua PUBLIC KEY (User ID)
                // NON INSERIRE MAI LA PRIVATE KEY QUI!
            )
            .then(
                (result) => {
                    console.log('EmailJS SUCCESS!', result.status, result.text);
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' }); // Resetta form
                },
                (error) => {
                    console.error('EmailJS FAILED...', error);
                    setSubmitStatus('error');
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                // Nascondi messaggio dopo un po'
                setTimeout(() => setSubmitStatus(''), 5000);
            });
    };

    return (
        <section className="contact-section section-container" id="contact">
            <h2 className="section-title">{t('contact.title')}</h2>
            <div className="contact-social-icons">
                {/* ... icone social ... */}
            </div>

            {/* ---> 4. COLLEGA IL REF AL FORM <--- */}
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t('contact.nameLabel')}:</label>
                    {/* ---> 5. Assicurati che i 'name' degli input corrispondano alle chiavi in formData e templateParams <--- */}
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contact.emailLabel')}:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contact.messageLabel')}:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required disabled={isSubmitting}/>
                </div>

                <ButtonNeon type="submit" disabled={isSubmitting} className="contact-submit-button">
                    {isSubmitting ? t('contact.submitting') : t('contact.sendButton')}
                </ButtonNeon>

                {submitStatus === 'success' && <p className="form-status-message success">{t('contact.submitSuccess')}</p>}
                {submitStatus === 'error' && <p className="form-status-message error">{t('contact.submitError')}</p>}
            </form>
        </section>
    );
};
export default Contact;