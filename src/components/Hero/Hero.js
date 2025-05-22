import React from 'react';
import styles from './Hero.module.css';
import { Link as ScrollLink } from 'react-scroll';
import maxPodsImage from '../../products/prod-maxpods.png'; // Featured product image

// Icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CachedIcon from '@mui/icons-material/Cached';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroOuterContainer}`}>
        <div className={styles.heroMainContent}>
          <div className={styles.heroTextContentNew}>
            <div className={styles.heroPremierBanner}>
              This Week Only for World Premier
            </div>
            <h1>Get Your Ultimate Sound Experience</h1>
            <p className={styles.heroDescription}>
              Discover the Max Pods PRO2: Unmatched noise-cancelling, crystal-clear audio, and all-day comfort. Limited time offer!
            </p>
            <div className={styles.heroPriceContainer}>
              <span className={styles.heroOriginalPrice}>$39.99</span>
              <span className={styles.heroDiscountedPrice}>$30.00</span>
            </div>
            <ScrollLink
              to="products" // Scrolls to the Products section
              smooth={true}
              duration={500}
              offset={-80}
              className={styles.heroButtonNew}
            >
              Shop Now <ArrowForwardIcon sx={{ fontSize: '1.2rem', marginLeft: '8px' }} />
            </ScrollLink>
          </div>
          <div className={styles.heroImageNew}>
            <img src={maxPodsImage} alt="Max Pods PRO2 Gaming Headset" />
          </div>
        </div>

        <div className={styles.heroFeatures}>
          <div className={styles.featureItem}>
            <LocalShippingIcon sx={{ fontSize: '2.5rem', color: 'var(--primary-color)' }} />
            <div>
              <h4>International Shipment</h4>
              <p>Reliable delivery across the globe.</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <CachedIcon sx={{ fontSize: '2.5rem', color: 'var(--primary-color)' }} />
            <div>
              <h4>Extended Returns</h4>
              <p>45-day hassle-free return policy.</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <VerifiedUserIcon sx={{ fontSize: '2.5rem', color: 'var(--primary-color)' }} />
            <div>
              <h4>Secure Payment</h4>
              <p>Your transactions are safe with us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
