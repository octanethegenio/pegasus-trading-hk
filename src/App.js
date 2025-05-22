import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import CartPage from './pages/CartPage/CartPage'; // Import CartPage
import ScrollToTop from './utils/ScrollToTop'; // Import ScrollToTop
import Notification from './components/Notification/Notification'; // Import Notification
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar />
      <Notification /> {/* Add Notification component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Add route for CartPage */}
        {/* You can add a 404 page here later */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
