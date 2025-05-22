import React from 'react';
import styles from './ContactInfo.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone'; // Removed as it's no longer used
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <h2>Contact Information</h2>
      <p className={styles.introText}>
        Have questions about our products, services, or partnerships? Our team is ready to provide the support you need. We look forward to hearing from you!
      </p>
      <div className={styles.infoItem}>
        <LocationOnIcon className={styles.icon} sx={{ fontSize: '1.8rem' }} />
        <div>
          <h3>Our Office</h3>
          <p>Pegasus Trading Global HK Limited</p>
          <p>Unit B1, 21/f, Gaylord Comm Building,</p>
          <p>114-118 Lockhart Road, Wan Chai</p>
          <p>Hong Kong</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <EmailIcon className={styles.icon} sx={{ fontSize: '1.8rem' }} />
        <div>
          <h3>Email Us</h3>
          <p><a href="mailto:info@pegasustradinghk.com">info@pegasustradinghk.com</a></p>
          <p><a href="mailto:sales@pegasustradinghk.com">sales@pegasustradinghk.com</a></p>
        </div>
      </div>
      {/* Phone number section removed as per request */}
       {/* Optional: Google Map Embed */}
       <div className={styles.mapContainer}>
        <h3>Find Us On Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.888596919951!2d114.1729960153917!3d22.28213178533266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005ddff77f77%3A0x295c685f739e8c12!2sGaylord%20Commercial%20Building%2C%20114-118%20Lockhart%20Rd%2C%20Wan%20Chai%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1627392183163!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Pegasus Trading Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
