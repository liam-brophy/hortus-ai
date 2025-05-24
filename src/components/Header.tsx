import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css'; // Import CSS Module
import useTheme from '../hooks/useTheme'; // Corrected import path for useTheme hook

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}> {/* Use global .container and local .headerContent */}
        <div className={styles.logoContainer}> {/* Added a container for the logo if needed for flex alignment */}
          <Link to="/" className={styles.logoLink}>
            Hortus<span className={styles.logoAi}>AI</span>
          </Link>
        </div>
          
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
              >
                About Us
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/news" 
                className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
              >
                News
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink 
                to="/careers" 
                className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </nav>

        <button 
          onClick={toggleTheme} 
          className={styles.themeToggleButton}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'} {/* Simple emoji toggle for now */}
        </button>
          
        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Mobile Navigation - Conditionally rendered below the main header content div or outside based on layout needs */}
      </div>
      {/* Mobile Navigation moved outside the flex container for full width */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          {/* The container class can be applied here if mobile nav should also be constrained */}
          <div className="container"> 
            <ul className={styles.mobileNavList}>
              <li className={styles.navItem}>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
