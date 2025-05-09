
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonNeon from '../common/ButtonNeon';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const whatsappLink = "https://wa.me/+393277661294";
    const emailLink = "mailto:pm@nedzmincancar.com";
    const linkedinLink = "https://www.linkedin.com/in/nedzmin-cancar-a11b2525b/";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitStatus('');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Nedzmin Cancar',
            message: formData.message,
        };

        emailjs
            .send(
                'service_4adwzq2',
                'template_erm8uzy',
                templateParams,
                'huKwYRdRK6qBxNAXW'
            )
            .then(
                (result) => {
                    console.log('EmailJS SUCCESS!', result.status, result.text);
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('EmailJS FAILED...', error.text || error);
                    setSubmitStatus('error');
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(''), 5000);
            });
    };

    return (
        <section className="contact-section section-container" id="contact">
            <h2 className="section-title">{t('contact.title')}</h2>

            <div className="contact-social-icons">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
                <a href={emailLink} className="social-icon email" aria-label="Email">
                    <FaEnvelope />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </a>
            </div>

            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t('contact.nameLabel')}:</label>
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