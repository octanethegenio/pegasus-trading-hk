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
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -80, // Adjust as per your navbar height
        spy: true,
        exact: 'true',
      });
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash
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
