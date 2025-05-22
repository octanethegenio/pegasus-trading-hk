import React, { createContext, useState, useCallback, useRef } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null); // { message: '', type: '' }
  const [isVisible, setIsVisible] = useState(false);
  const timerId = useRef(null);

  const showNotification = useCallback((message, type = 'success') => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    setNotification({ message, type });
    setIsVisible(true);

    timerId.current = setTimeout(() => {
      setIsVisible(false);
      // Delay hiding to allow for fade-out animation
      setTimeout(() => setNotification(null), 300); 
    }, 3000); // Notification visible for 3 seconds
  }, []);

  const hideNotification = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    setIsVisible(false);
    setTimeout(() => setNotification(null), 300);
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, showNotification, hideNotification, isVisible }}>
      {children}
    </NotificationContext.Provider>
  );
};
