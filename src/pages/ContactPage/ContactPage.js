import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <section className={styles.contactPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <div className={styles.contactGrid}>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
          <div className={styles.infoWrapper}>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
