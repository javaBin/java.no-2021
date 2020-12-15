import React from 'react';
import {Formik} from 'formik';

export function ContactForm() {
    return (
        <Formik
            initialValues={{email: '', name: '', message: ''}}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                // alert(JSON.stringify(values, null, 2));
            }}
        >
            {props => {
                const {values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
                return (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h1 className="contact-form_header">Kontakt</h1>

                        <label htmlFor="name">Navn:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                        />
                        {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}

                        <label htmlFor="email">Epost:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                        />
                        {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}

                        <label htmlFor="message">Melding:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.message && touched.message ? 'text-input error' : 'contact-form_message'}
                        />
                        {errors.message && touched.message && <div className="input-feedback">{errors.message}</div>}

                        <button type="submit" className="contact-form_button">
                            Send
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
}

export default ContactForm;
