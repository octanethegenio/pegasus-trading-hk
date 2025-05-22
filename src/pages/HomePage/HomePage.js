import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../../components/Hero/Hero';
import FeaturedDeals from '../../components/FeaturedDeals/FeaturedDeals';
import About from '../../components/About/About';
import Categories from '../../components/Categories/Categories'; // Changed from Services
import Products from '../../components/Products/Products';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle scrolling from route state (used by Navbar when navigating from other pages)
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      // Clear the state to prevent re-scrolling on refresh or back navigation
      navigate(location.pathname, { replace: true, state: {} });
      
      setTimeout(() => { // Delay to ensure elements are rendered
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -80,
          spy: true,
          exact: 'true',
        });
      }, 100);
    } 
    // Handle scrolling from URL hash (for direct links with hash or manual hash changes)
    else if (location.hash) {
      const sectionId = location.hash.substring(1); 
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -80,
          spy: true,
          exact: 'true',
        });
      }, 100);
    } else {
      // Scroll to top if no hash and not already at top
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    }
  }, [location.state, location.hash, navigate]); // Rerun effect if state or hash changes

  return (
    <>
      <Hero />
      <FeaturedDeals />
      <Categories /> 
      <Products /> {/* Moved Products up */}
      <About />
    </>
  );
};

export default HomePage;
