import React from 'react';

export function ContactForm() {
    return (
        <form className="contact-form">
            <h1 className="contact-form_header">Kontakt</h1>

            <label htmlFor="name">Navn:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Epost:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Melding:</label>
            <textarea className="contact-form_message" id="message" name="message" />

            <button type="submit" className="contact-form_button">
                Send
            </button>
        </form>
    );
}

export default ContactForm;
