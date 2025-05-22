import React from 'react';
import styles from './Products.module.css';
import ProductCard from '../ProductCard/ProductCard'; // Import the new component

import maxPodsImage from '../../products/prod-maxpods.png';
import powerBankImage from '../../products/prod-powerbank.png';
import twsEarbudsImage from '../../products/prod-twsbuds.png';
import smartwatchChargerImage from '../../products/prod-chargersmart.png';
import wallChargerImage from '../../products/prod-20wcharg.png';
import ancMaxHeadsetImage from '../../products/prod-ancmax.png';

// New product image imports
import boomboxImage from '../../products/Boombox.png';
import s10UltraWatchImage from '../../products/S10.png';
import siliconeCaseImage from '../../products/Silicone.png';
import defenderCaseImage from '../../products/Defender.png';
import usbcAdapterImage from '../../products/USB-C.png';
import ancGpsEarbudsImage from '../../products/GPS-Serial.png';

const productsData = [
  {
    id: 1,
    name: 'Max Pods PRO2 Wireless Noise-Cancelling Gaming Headset',
    image: maxPodsImage,
    originalPrice: 39.99,
    salePrice: 30.00,
    inStock: true,
    shortDescription: ['Active Noise Cancellation', 'Superior Comfort', 'Crystal-Clear Audio'],
    category: 'Headphones',
  },
  {
    id: 2,
    name: '5000mAh Power Pack Portable Magsafe Power Bank',
    image: powerBankImage,
    originalPrice: 15.99,
    salePrice: 10.00,
    inStock: true,
    shortDescription: ['Magsafe Compatible', 'Compact Design', '5000mAh Capacity'],
    category: 'Powerbank',
  },
  {
    id: 3,
    name: 'TWS Noise-Cancelling Wireless Earbuds for PRO 2nd–4th Gen',
    image: twsEarbudsImage,
    originalPrice: 19.99,
    salePrice: 14.00,
    inStock: true,
    shortDescription: ['True Wireless Stereo', 'Noise Cancellation', 'For PRO 2-4 Gen'],
    category: 'Headphones',
  },
  {
    id: 4,
    name: '10000mAh 2-in-1 Wireless Power Bank & Smartwatch Charger',
    image: smartwatchChargerImage,
    originalPrice: 19.99,
    salePrice: 14.00,
    inStock: true,
    shortDescription: ['10000mAh High Capacity', 'Wireless Phone Charging', 'Smartwatch Charging Pad'],
    category: 'Charger', // Could also be Powerbank or Smartwatch
  },
  {
    id: 5,
    name: '20W Fast PD Type-C Wall Charger with Cable',
    image: wallChargerImage,
    originalPrice: 9.99,
    salePrice: 5.00,
    inStock: true,
    shortDescription: ['20W Power Delivery', 'Fast Charging', 'Includes Type-C Cable'],
    category: 'Charger',
  },
  {
    id: 6,
    name: 'Original Anc Max Bluetooth Headset Gaming Sporting Earphones',
    image: ancMaxHeadsetImage,
    originalPrice: 39.99,
    salePrice: 30.00,
    inStock: true,
    shortDescription: ['ANC Technology', 'Bluetooth Connectivity', 'Ideal for Gaming & Sports'],
    category: 'Headphones',
  },
  {
    id: 7,
    name: 'Boombox Sound Box Flip6 Subwoofer Bass Wireless Bl Speaker',
    image: boomboxImage,
    salePrice: 20.00,
    inStock: true,
    shortDescription: ['Powerful Subwoofer Bass', 'Wireless Bluetooth Speaker', 'Portable Boombox Design'],
    category: 'Speaker',
  },
  {
    id: 8,
    name: 'Series 10 (S10) Ultra Smart Watch Titanium',
    image: s10UltraWatchImage,
    salePrice: 20.00,
    inStock: true,
    shortDescription: ['Titanium Build Quality', 'Advanced Health Tracking', 'Large Ultra Display'],
    category: 'Smartwatch',
  },
  {
    id: 9,
    name: 'Silicone Leather Magsafe Phone Case for iPhone 12-16',
    image: siliconeCaseImage,
    salePrice: 5.00,
    inStock: true,
    shortDescription: ['Magsafe Compatible', 'Premium Silicone Leather', 'Fits iPhone 12-16 Models'],
    category: 'Cover',
  },
  {
    id: 10,
    name: 'Quality Defender Case for iPhone 12-16 Pro Max',
    image: defenderCaseImage,
    salePrice: 5.00,
    inStock: true,
    shortDescription: ['Heavy Duty Protection', 'For iPhone Pro Max Models', 'Durable Defender Series'],
    category: 'Cover',
  },
  {
    id: 11,
    name: 'USB-C Power Adapter for Apple 20W Pd Charger',
    image: usbcAdapterImage,
    salePrice: 4.00,
    inStock: true,
    shortDescription: ['20W Power Delivery', 'Official Apple Compatibility', 'USB-C Fast Charging'],
    category: 'Charger',
  },
  {
    id: 12,
    name: 'ANC GPS Serial Animation Eabuds Air 3 PRO2',
    image: ancGpsEarbudsImage,
    salePrice: 10.00,
    inStock: true,
    shortDescription: ['Active Noise Cancellation', 'GPS & Serial Animation', 'Air 3 PRO2 Model'],
    category: 'Headphones',
  },
];

const Products = () => {
  const totalProducts = productsData.length; 

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.productsContainer}`}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        
        <div className={styles.productsGrid}>
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { productsData };
export default Products;
