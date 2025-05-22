import React, { useState, useContext } from 'react'; // Added useContext
import styles from './ProductCard.module.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ProductPopup from '../ProductPopup/ProductPopup'; // Import the popup component
import { CartContext } from '../../context/CartContext'; // Import CartContext
import { NotificationContext } from '../../context/NotificationContext'; // Import NotificationContext

const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Get addToCart from context
  const { showNotification } = useContext(NotificationContext); // Use NotificationContext

  if (!product) {
    return null;
  }

  const handleProductClick = () => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.productImageContainer}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.productName} onClick={handleProductClick} style={{ cursor: 'pointer' }}>
            {product.name}
          </h3>
          <div className={styles.productPriceContainer}>
            {product.originalPrice && (
              <span className={styles.productOriginalPrice}>
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className={styles.productSalePrice}>
            ${product.salePrice.toFixed(2)}
          </span>
        </div>
        {product.inStock && (
          <div className={styles.productStockStatus}>
            <CheckCircleOutlineIcon sx={{ fontSize: '1rem', color: 'green', marginRight: '5px' }} />
            In Stock
          </div>
        )}
      </div>
      {product.shortDescription && product.shortDescription.length > 0 && (
        <div className={styles.productHoverContent}>
          <ul className={styles.productShortDescriptionList}>
            {product.shortDescription.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <button
            className={styles.addToCartButton}
            onClick={() => {
              addToCart(product, 1);
              showNotification(`${product.name} added to cart!`);
            }} // Add to cart with quantity 1 and show notification
          >
            Add to cart
          </button>
        </div>
      )}
      </div>
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default ProductCard;
