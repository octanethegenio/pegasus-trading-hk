import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotificationContext } from '../../context/NotificationContext';
import styles from './Notification.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

const Notification = () => {
  const { notification, hideNotification, isVisible } = useContext(NotificationContext);

  if (!notification) {
    return null;
  }

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircleIcon className={styles.icon} />;
      case 'error':
        return <ReportProblemIcon className={styles.icon} />;
      case 'info':
        return <InfoIcon className={styles.icon} />;
      default:
        return <CheckCircleIcon className={styles.icon} />;
    }
  };

  return (
    <div 
      className={`${styles.notification} ${styles[notification.type]} ${isVisible ? styles.visible : styles.hidden}`}
    >
      {getIcon()}
      <span className={styles.message}>
        {notification.message}
        {notification.type === 'success' && (
          <Link to="/cart" className={styles.viewCartLink} onClick={hideNotification}>
            View Cart
          </Link>
        )}
      </span>
      <button onClick={hideNotification} className={styles.closeButton}>
        <CloseIcon sx={{ fontSize: '1.2rem' }} />
      </button>
    </div>
  );
};

export default Notification;
