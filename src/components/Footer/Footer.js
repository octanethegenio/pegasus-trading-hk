import React from 'react';
import styles from './Footer.module.css';
import logoWhite from '../../assets/logo_white.png'; // White logo for dark footer
import { Link as RouterLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerBrand}>
          <RouterLink to="/" onClick={scrollToTop}>
            <img src={logoWhite} alt="Pegasus Trading" className={styles.footerLogo} />
          </RouterLink>
          <p>Pegasus Trading Global HK Limited</p>
          <p className={styles.tagline}>Connecting the world with quality electronics.</p>
          <p className={styles.summary}>We specialize in sourcing and distributing a wide array of innovative electronic accessories and components to meet the needs of the global market.</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><RouterLink to="/#about" onClick={() => scroll.scrollTo(document.getElementById('about').offsetTop - 80)}>About Us</RouterLink></li>
            <li><RouterLink to="/#products" onClick={() => scroll.scrollTo(document.getElementById('products').offsetTop - 80)}>Products</RouterLink></li>
            <li><RouterLink to="/#categories" onClick={() => scroll.scrollTo(document.getElementById('categories').offsetTop - 80)}>Categories</RouterLink></li> {/* Changed from services */}
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h4>Get In Touch</h4>
          <p>Unit B1, 21/f, Gaylord Comm Building, 114-118 Lockhart Road, Wan Chai, Hong Kong</p>
          <p>Email: info@pegasustradinghk.com</p>
          <p>Phone: +852 5434 0615</p>
        </div>
        <div className={styles.footerSocial}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Pegasus Trading Global HK Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
