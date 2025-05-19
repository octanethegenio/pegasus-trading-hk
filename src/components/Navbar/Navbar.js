import React, { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Removed react-scroll from Navbar
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; // Pegasus Pink logo
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    navigate('/'); // Navigates to /#/
    // HomePage.js useEffect will scroll to top if hash is empty or just '#'
    // Or, explicitly set hash to empty if needed: window.location.hash = '';
  };

  const handleSectionNavigation = (sectionId) => {
    closeMobileMenu();
    // Navigate to the root path of the HashRouter.
    // This ensures that HomePage component is rendered.
    navigate('/'); 
    
    // Use setTimeout to allow the navigation to '/' to complete and react-router's
    // internal state to update before we manipulate window.location.hash.
    // This helps ensure that HomePage's useEffect hook, which listens to location.hash
    // from useLocation(), correctly picks up the new hash.
    setTimeout(() => {
      window.location.hash = sectionId; // This should result in a URL like domain.com/#sectionId
    }, 0); 
  };

  const navLinks = [
    { sectionId: "hero", label: "Home" },
    { sectionId: "about", label: "About Us" },
    { sectionId: "services", label: "Our Focus" },
    { sectionId: "why-choose-us", label: "Why Us" },
  ];

  return (
    <nav className={`${styles.navbar} ${navbar ? styles.active : ''}`}>
      <div className={styles.navbarContainer}>
        <RouterLink to="/" className={styles.navbarLogo} onClick={scrollToTop}> {/* Use RouterLink for simple nav to /#/ */}
          <img src={logo} alt="Pegasus Trading" />
          {/* <span>PEGASUS TRADING</span> */}
        </RouterLink>
        <div className={styles.menuIcon} onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navLinks.map(link => (
            <li className={styles.navItem} key={link.sectionId}>
              {/* Use a button or styled div for onClick behavior to control navigation and hash */}
              <a 
                href={`#${link.sectionId}`} // This is for semantics and right-click "open in new tab"
                className={styles.navLinks}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor jump
                  handleSectionNavigation(link.sectionId);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.navItem}>
            <NavLink
              to="/contact" // This correctly becomes /#/contact
              className={({ isActive }) =>
                isActive ? `${styles.navLinks} ${styles.activeLink}` : styles.navLinks
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
