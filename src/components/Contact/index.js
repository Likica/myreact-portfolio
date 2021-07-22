import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e) => {

    };

    const handleChange = (e) => {

    };

    return (
        <section>

        </section>
    );
}

export default ContactForm;
