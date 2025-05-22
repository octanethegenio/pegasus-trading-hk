import React from 'react';
import styles from './Categories.module.css';

// Import category images from src/assets
import headphonesImage from '../../assets/categories/headphones.png';
import chargersImage from '../../assets/categories/charger.png';
import powerbanksImage from '../../assets/categories/powerbank.png';
import phonecasesImage from '../../assets/categories/cover.png';
import smartwatchesImage from '../../assets/categories/smartwatch.png';
import speakersImage from '../../assets/categories/speaker.png';

const categoriesData = [
  {
    id: 1,
    title: 'Headphones',
    image: headphonesImage, 
  },
  {
    id: 2,
    title: 'Chargers',
    image: chargersImage, 
  },
  {
    id: 3,
    title: 'Power Banks',
    image: powerbanksImage, 
  },
  {
    id: 4,
    title: 'Phone Cases',
    image: phonecasesImage, 
  },
  {
    id: 5,
    title: 'Wearables',
    image: smartwatchesImage, 
  },
  {
    id: 6,
    title: 'Speakers',
    image: speakersImage, 
  },
];

const Categories = () => {
  return (
    <section id="categories" className={styles.categoriesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Product Categories</h2>
        <div className={styles.categoriesGrid}>
          {categoriesData.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.categoryImageContainer}>
                <img src={category.image} alt={category.title} className={styles.categoryImage} />
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
