import React, { useState, useContext } from 'react';
import styles from './ProductPopup.module.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CartContext } from '../../context/CartContext'; // Import CartContext
import { NotificationContext } from '../../context/NotificationContext'; // Import NotificationContext

// Function to generate a random SKU
const generateSKU = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let sku = 'SKU-';
  for (let i = 0; i < 8; i++) {
    sku += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return sku;
};

const ProductPopup = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext); // Use NotificationContext
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const sku = generateSKU(); // Generate a unique SKU for each product display

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showNotification(`${product.name} added to cart!`);
    onClose(); // Optionally close popup after adding to cart
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={styles.popupGrid}>
          <div className={styles.productImageContainer}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            {/* Placeholder for additional small image previews if needed */}
          </div>
          <div className={styles.productDetailsContainer}>
            <h2 className={styles.productName}>{product.name}</h2>
            <div className={styles.skuAndStock}>
              <span className={styles.sku}>SKU: {sku}</span>
              {product.inStock && (
                <span className={styles.inStock}>
                  <CheckCircleOutlineIcon sx={{ fontSize: '1rem', color: 'green', marginRight: '5px' }} />
                  In Stock
                </span>
              )}
            </div>
            <p className={styles.productPrice}>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              ${product.salePrice.toFixed(2)}
            </p>
            {product.shortDescription && product.shortDescription.length > 0 && (
              <ul className={styles.productDescriptionList}>
                {product.shortDescription.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            )}
            <hr className={styles.divider} />
            <div className={styles.actionsContainer}>
              <div className={styles.quantitySelector}>
                <button className={styles.quantityButton} onClick={decreaseQuantity}>-</button>
                <span className={styles.quantityNumber}>{quantity}</span>
                <button className={styles.quantityButton} onClick={increaseQuantity}>+</button>
              </div>
              <button className={styles.addToCartButtonPopup} onClick={handleAddToCart}>Add to cart</button>
            </div>
            <hr className={styles.divider} />
            <div className={styles.contactAndCategory}>
              <div className={styles.contactInfo}>
                Have a question? Contact us<br />
                <a href="mailto:info@pegasustradinghk.com" className={styles.emailLink}>
                  info@pegasustradinghk.com
                </a>
              </div>
              <div className={styles.categoryInfo}>
                Categories: <span className={styles.categoryName}>{product.category || 'General'}</span>
                {/* Add more categories if applicable */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
