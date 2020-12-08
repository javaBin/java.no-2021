import React from 'react';
import '../scss/contact.scss';
import ContactForm from '../components/contact-form';
import SocialMedia from '../components/social-media';

export function Contact() {
    return (
        <div className="contact-container">
            <ContactForm />
            <SocialMedia />
        </div>
    );
}

export default Contact;
