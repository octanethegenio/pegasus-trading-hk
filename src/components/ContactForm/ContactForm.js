import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ cartItems = [] }) => { // Accept cartItems as a prop
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const itemsList = cartItems.map((item, index) => `  ${index + 1}. ${item.name} (Quantity: ${item.quantity})`).join('\n'); // Numbered list
      const prefilledMessage = `Hello Pegasus Trading Team,\n\nI would like to inquire about placing an order for the following items from my cart:\n\n--- MY ORDER ITEMS ---\n${itemsList}\n----------------------\n\nCould you please provide information on how to proceed with completing this order?\n\nThank you for your assistance.`;
      setFormData(prevState => ({
        ...prevState,
        subject: 'Order Inquiry - Items from Cart', // Updated subject
        message: prefilledMessage
      }));
    } else {
      // If cart is empty or not provided, ensure message is clear or default
      // This part can be adjusted if a different default message is needed when no cart items
      setFormData(prevState => ({
        ...prevState,
        // subject: '', // Clear subject if no cart items, or keep as is
        // message: '' // Clear message if no cart items, or keep as is
      }));
    }
  }, [cartItems]); // Rerun effect if cartItems change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }
    // Here you would typically send the data to a backend API
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay or keep data for user to see
    setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false); // Allow another submission
    }, 5000);
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Send Us a Message</h2>
      {isSubmitted && <p className={styles.successMessage}>Thank you! Your message has been sent.</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="8" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={`btn ${styles.submitButton}`}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
