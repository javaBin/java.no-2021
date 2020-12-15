import React from 'react';
import '../scss/Contact.scss';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';

export function Contact() {
    return (
        <div className="contact-container">
            <ContactForm />
            <SocialMedia />
        </div>
    );
}

export default Contact;
