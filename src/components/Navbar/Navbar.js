import React, { useState, useEffect, useContext } from 'react'; // Added useContext
import { Link as RouterLink, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll, scroller } from 'react-scroll'; // Re-added ScrollLink and scroller
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; // Pegasus Pink logo
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import cart icon
import { CartContext } from '../../context/CartContext'; // Import CartContext

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount } = useContext(CartContext); // Get item count from context

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const scrollToTop = () => {
    closeMobileMenu();
    if (location.pathname === '/') {
      scroll.scrollToTop();
    } else {
      navigate('/'); // Navigate to homepage, HomePage will scroll to top if no state/hash
    }
  };
  
  const handleNavigateToSection = (sectionId) => {
    closeMobileMenu();
    navigate('/', { state: { scrollToSection: sectionId } });
  };

  const navLinks = [
    { sectionId: "hero", label: "Home" }, // sectionId used for ScrollLink 'to' and state
    { sectionId: "products", label: "Products" },
    { sectionId: "categories", label: "Categories" }, // Changed from services
    { sectionId: "about", label: "About Us" },
  ];

  return (
    <nav className={`${styles.navbar} ${navbar ? styles.active : ''}`}>
      <div className={styles.navbarContainer}>
        <RouterLink to="/" className={styles.navbarLogo} onClick={scrollToTop}>
          <img src={logo} alt="Pegasus Trading" />
          {/* <span>PEGASUS TRADING</span> */}
        </RouterLink>
        <div className={styles.menuIcon} onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navLinks.map(link => (
            <li className={styles.navItem} key={link.sectionId}>
              {location.pathname === '/' ? (
                <ScrollLink
                  to={link.sectionId}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className={styles.navLinks}
                  activeClass={styles.activeLink}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <span
                  className={styles.navLinks}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleNavigateToSection(link.sectionId)}
                >
                  {link.label}
                </span>
              )}
            </li>
          ))}
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navLinks} ${styles.activeLink}` : styles.navLinks
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? `${styles.navLinks} ${styles.activeLink}` : styles.navLinks
              }
              onClick={closeMobileMenu}
            >
              <ShoppingCartIcon sx={{ fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '4px' }} />
              Cart ({getItemCount()})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
