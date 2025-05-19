import React from 'react';
import styles from './Hero.module.css';
import { Link as ScrollLink } from 'react-scroll';
// Optional: import heroBg from '../../assets/hero-bg.jpg';

const Hero = () => {
  // Style for background image if you have one
  // const heroStyle = {
  //   backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url(${heroBg})`
  // };

  return (
    // <section id="hero" className={styles.hero} style={heroStyle}> // Use this if you have heroBg
    <section id="hero" className={`${styles.hero} section-dark`}>
      <div className={`${styles.heroContent} container`}>
        <h1>Powering Global Connections with Cutting-Edge Electronics</h1>
        <p>
          Pegasus Trading Global HK Limited is your premier global partner for sourcing and distributing
          an extensive range of high-quality electronic accessories and components. We bridge the gap
          between innovative manufacturers and diverse markets worldwide, ensuring seamless access to
          the latest technological advancements.
        </p>
        <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn"
          >
            Discover Our Focus
          </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
