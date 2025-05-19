import React, { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Removed scroller
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

  // This function is now only for scrolling when already on the homepage
  // or for the navigate('/') then scroll logic if we decide to keep it.
  // For now, HomePage.js handles scrolling from hash.
  // const handleNavToSection = (section) => {
  //   closeMobileMenu();
  //   if (location.pathname === '/') {
  //     scroller.scrollTo(section, {
  //       smooth: true,
  //       duration: 500,
  //       spy: true,
  //       exact: "true",
  //       offset: -80,
  //     });
  //   } else {
  //     // This part is now handled by HomePage.js useEffect via URL hash
  //     navigate(`/#${section}`); 
  //   }
  // };

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
      navigate('/');
      // No need for timeout here, as scroll.scrollToTop() will work once on homepage
    }
  };

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "services", label: "Our Focus" },
    { to: "why-choose-us", label: "Why Us" },
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
            <li className={styles.navItem} key={link.to}>
              {location.pathname === '/' ? (
                <ScrollLink
                  to={link.to}
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
                // When not on homepage, RouterLink navigates to /#section
                // HomePage useEffect will handle the scroll.
                <RouterLink
                  to={`/#${link.to}`}
                  className={styles.navLinks}
                  onClick={closeMobileMenu} // Just close menu, navigation is by RouterLink
                >
                  {link.label}
                </RouterLink>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
