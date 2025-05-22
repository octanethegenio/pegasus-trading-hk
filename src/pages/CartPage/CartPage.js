import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import styles from './CartPage.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity, 10));
  };

  const handleContactUs = () => {
    // Navigate to contact page, passing cart items in state
    navigate('/contact', { state: { cartItems } });
  };

  if (cartItems.length === 0) {
    return (
      <div className={`${styles.cartPage} ${styles.emptyCartContainer}`}>
        <h2 className={styles.cartTitle}>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className={styles.continueShoppingButton}>
          <ArrowBackIcon sx={{ marginRight: '8px' }} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Your Shopping Cart</h2>
          <button onClick={clearCart} className={styles.clearCartButton}>
            Clear Cart
          </button>
        </div>

        <div className={styles.cartItemsList}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImageContainer}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
              </div>
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemPrice}>${item.salePrice.toFixed(2)}</p>
              </div>
              <div className={styles.itemQuantity}>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                  disabled={item.quantity <= 1}
                  className={styles.quantityAdjustButton}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className={styles.quantityInput}
                  min="1"
                />
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className={styles.quantityAdjustButton}
                >
                  +
                </button>
              </div>
              <div className={styles.itemTotal}>
                <p>${(item.salePrice * item.quantity).toFixed(2)}</p>
              </div>
              <div className={styles.itemActions}>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeItemButton}>
                  <DeleteOutlineIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryDetails}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            {/* Add more summary details like shipping, tax if needed later */}
            <div className={`${styles.summaryRow} ${styles.summaryTotalRow}`}>
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleContactUs} className={styles.contactToOrderButton}>
            Contact Us to Complete Order
          </button>
          <Link to="/" className={styles.continueShoppingLink}>
            <ArrowBackIcon sx={{ marginRight: '8px' }} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
