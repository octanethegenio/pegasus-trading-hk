import React from 'react';
import styles from './Products.module.css';

// Import product images
import maxPodsImage from '../../products/prod-maxpods.png';
import powerBankImage from '../../products/prod-powerbank.png';
import twsEarbudsImage from '../../products/prod-twsbuds.png';
import smartwatchChargerImage from '../../products/prod-chargersmart.png';
import wallChargerImage from '../../products/prod-20wcharg.png';
import ancMaxHeadsetImage from '../../products/prod-ancmax.png';

const productsData = [
  {
    id: 1,
    name: 'Max Pods PRO2 Wireless Noise-Cancelling Gaming Headset',
    image: maxPodsImage,
  },
  {
    id: 2,
    name: '5000mAh Power Pack Portable Magsafe Power Bank',
    image: powerBankImage,
  },
  {
    id: 3,
    name: 'TWS Noise-Cancelling Wireless Earbuds for PRO 2nd–4th Gen',
    image: twsEarbudsImage,
  },
  {
    id: 4,
    name: '10000mAh 2-in-1 Wireless Power Bank & Smartwatch Charger',
    image: smartwatchChargerImage,
  },
  {
    id: 5,
    name: '20W Fast PD Type-C Wall Charger with Cable',
    image: wallChargerImage,
  },
  {
    id: 6,
    name: 'Original Anc Max Bluetooth Headset Gaming Sporting Earphones',
    image: ancMaxHeadsetImage,
  },
];

const Products = () => {
  return (
    <section id="products" className={`${styles.productsSection} section-light`}>
      <div className="container">
        <h2>Our Products</h2>
        <div className={styles.productsGrid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3>{product.name}</h3>
              {/* You can add a short description or price here if needed */}
              {/* <p className={styles.productPrice}>$XX.XX</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
