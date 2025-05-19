import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// import styles from './HomePage.module.css'; // If you need specific page styles

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove #
      // Add a small delay to ensure the page and elements are rendered before scrolling
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -80, // Adjust as per your navbar height
          spy: true,
          exact: 'true',
        });
      }, 100); // 100ms delay, adjust if needed
    } else {
      // Scroll to top if no hash, but only if not already at top to avoid jitter on initial load
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    }
  }, [location.hash]); // Rerun effect if hash changes

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* Add other sections if needed */}
    </>
  );
};

export default HomePage;
