import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <section className={styles.contactPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <div className={styles.contactGrid}>
          <div className={styles.formWrapper}>
            <ContactForm cartItems={cartItems} />
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
