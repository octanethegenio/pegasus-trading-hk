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
              Pegasus Trading Global HK Limited, established with a vision for the future in 2025, stands as a dynamic and forward-thinking leader in the global trade of innovative electronic accessories. Strategically based in the vibrant international hub of Hong Kong, we expertly leverage our prime location and extensive professional network to seamlessly connect cutting-edge manufacturers with diverse markets across the globe. Our core expertise lies in identifying emerging trends and delivering in-demand products efficiently.
            </p>
            <p>
              Our mission extends beyond mere transactions; we aim to empower businesses by providing consistent and reliable access to a comprehensive portfolio of high-quality electronic products. This ranges from advanced wireless audio solutions and robust portable power options to a multitude of other essential tech accessories. We are staunchly committed to fostering enduring, long-term partnerships built on a robust foundation of unwavering trust, operational efficiency, and a shared vision for mutual growth and success in the fast-paced electronics industry.
            </p>
          </div>
          <div className={styles.aboutFeatures}>
            <div className={styles.featureItem}>
              <PublicIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Global Reach</h3>
              <p>Our extensive network and logistical expertise allow us to connect markets across continents, ensuring timely and efficient delivery of products to your doorstep, wherever you are.</p>
            </div>
            <div className={styles.featureItem}>
              <StarIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Quality Assurance</h3>
              <p>We meticulously source and rigorously vet all products, guaranteeing they meet stringent international quality standards, so you receive only reliable and durable electronics.</p>
            </div>
            <div className={styles.featureItem}>
              <HandshakeIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Partnership Focused</h3>
              <p>We believe in building strong, lasting relationships with our clients and suppliers, fostering an ecosystem of collaboration, transparency, and shared success.</p>
            </div>
            <div className={styles.featureItem}>
              <EmojiObjectsIcon className={styles.featureIcon} sx={{ fontSize: '3rem' }} />
              <h3>Innovative Solutions</h3>
              <p>Our team is dedicated to constantly exploring emerging technologies and market trends, ensuring we provide our partners with the most cutting-edge and innovative electronic products available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
