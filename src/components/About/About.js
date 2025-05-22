import React from 'react';
import styles from './About.module.css';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';


const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Pegasus Trading</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Pegasus Trading Global HK Limited, envisioned for 2025, is a dynamic leader in innovative electronic accessories. Based in Hong Kong, we connect cutting-edge manufacturers with global markets, focusing on emerging trends and efficient delivery.
            </p>
            <p>
              Our mission is to empower businesses with reliable access to high-quality electronic products, from wireless audio to portable power and tech essentials. We build long-term partnerships based on trust, efficiency, and shared success in the electronics industry.
            </p>
          </div>
          <div className={styles.aboutFeatures}>
            <div className={styles.featureItem}>
              <PublicIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Global Reach</h3>
              <p>Connecting markets across continents with timely, efficient product delivery to your doorstep.</p>
            </div>
            <div className={styles.featureItem}>
              <StarIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Quality Assurance</h3>
              <p>Meticulously sourced and vetted products meeting stringent international standards for reliability.</p>
            </div>
            <div className={styles.featureItem}>
              <HandshakeIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Partnership Focused</h3>
              <p>Building strong, lasting relationships with clients and suppliers through collaboration and transparency.</p>
            </div>
            <div className={styles.featureItem}>
              <EmojiObjectsIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Innovative Solutions</h3>
              <p>Exploring emerging technologies to provide partners with cutting-edge electronic products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
