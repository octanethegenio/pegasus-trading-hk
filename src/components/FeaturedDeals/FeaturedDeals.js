import React, { useState, useEffect } from 'react';
import styles from './FeaturedDeals.module.css';
import { productsData } from '../Products/Products.js';
import ProductCard from '../ProductCard/ProductCard'; // Import the new component
import { Link as ScrollLink } from 'react-scroll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import leftPromotionalImage from '../../assets/promotional/left.jpg';
import rightPromotionalImage from '../../assets/promotional/right.jpg';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-05-28T23:59:59') - +new Date(); // Example end date
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) { // Handle case where time is up
      return;
    }
    timerComponents.push(
      <span key={interval}>
        {String(timeLeft[interval]).padStart(2, '0')}
      </span>
    );
  });

  return (
    <div className={styles.countdown}>
      {timerComponents.length ? 
        <>
          <span>{timerComponents[0]}</span> : <span>{timerComponents[1]}</span> : <span>{timerComponents[2]}</span> : <span>{timerComponents[3]}</span>
        </> 
        : <span>Offer Ended</span>}
    </div>
  );
};


const FeaturedDeals = () => {
  const featuredProducts = productsData.slice(0, 5); // Get first 5 products

  return (
    <section className={styles.featuredDealsSection}>
      <div className={`container ${styles.featuredDealsContainer}`}> {/* Added specific class */}
        <div className={styles.promoBannersContainer}>
          <div className={styles.promoBanner}>
            <div 
              className={styles.bannerBackgroundImage} 
              style={{ 
                backgroundImage: `url(${leftPromotionalImage})`, 
                opacity: 0.6 
              }}
            ></div>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
              <span className={styles.bannerTag}>Top Quality Audio</span>
              <h3>Immersive Sound, Unbeatable Prices</h3>
              <p>Explore our premium headsets and earbuds.</p>
              <ScrollLink to="products" smooth={true} duration={500} offset={-80} className={styles.bannerShopNow}>
                Shop Now <ArrowForwardIcon sx={{ fontSize: '1rem', marginLeft: '5px' }} />
              </ScrollLink>
            </div>
          </div>
          <div className={styles.promoBanner}>
            <div 
              className={styles.bannerBackgroundImage} 
              style={{ 
                backgroundImage: `url(${rightPromotionalImage})`, 
                opacity: 0.6 
              }}
            ></div>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
              <span className={styles.bannerTag}>Power On The Go</span>
              <h3>Stay Charged, Anywhere, Anytime</h3>
              <p>Discover reliable power banks and chargers.</p>
              <ScrollLink to="products" smooth={true} duration={500} offset={-80} className={styles.bannerShopNow}>
                Shop Now <ArrowForwardIcon sx={{ fontSize: '1rem', marginLeft: '5px' }} />
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className={styles.latestDealsHeader}>
          <h2>Latest Deals for This Week</h2>
          <div className={styles.timerContainer}>
            <CountdownTimer />
            <span className={styles.timerLabel}>Remains until the end of the offer</span>
          </div>
        </div>

        <div className={styles.dealsGrid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
