"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!subject) newErrors.subject = 'Subject is required';
    if (!message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ name, email, subject, message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.contactFormClass} onSubmit={handleSubmit}>
        
        <label className={styles.contactLabel}>
          <input
            className={styles.contactFormInput}
            type="text"
            value={name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="- YOUR NAME"
            aria-label="Name"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>

        <label className={styles.contactLabel}>
          <input
            className={styles.contactFormInput}
            type="text"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="- YOUR EMAIL"
            aria-label="Email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>

        <label className={styles.contactLabel}>
          <input
            className={styles.contactFormInput}
            type="text"
            value={subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            placeholder="- SUBJECT"
            aria-label="Subject"
          />
          {errors.subject && <span className={styles.error}>{errors.subject}</span>}
        </label>

        <label className={styles.contactLabelMessage}>
          <textarea
            className={`${styles.contactFormInput} ${styles.message}`}
            value={message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="- YOUR MESSAGE"
            aria-label="Message"
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </label>

        <label>
          <button type="submit">Send</button>
        </label>
      </form>
    </div>
  );
};

export default ContactForm;
