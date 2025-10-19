/**
 * Navbar Component
 * 
 * Left sidebar navigation for the portfolio.
 * Displays navigation links, logo, and social media icons.
 * Uses React Router for page navigation.
 * 
 * Abstraction Function:
 * - Provides consistent navigation across all pages
 * - Highlights active page based on current route
 * - Collapses to hamburger menu on mobile devices
 * 
 * Representation Invariant:
 * - navItems array is never empty
 * - Active page always corresponds to a valid route path
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaTrophy, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.scss';

/**
 * Navbar functional component
 * 
 * REQUIRES: Must be inside React Router context
 * MODIFIES: Mobile menu open/closed state
 * EFFECTS: Renders sidebar navigation with page routing functionality
 */
const Navbar = () => {
  // State for mobile menu (open/closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Get current location/route from React Router
  const location = useLocation();

  /**
   * Navigation items configuration
   * Each item contains a route path, icon, and label
   */
  const navItems = [
    { id: 'home', path: '/', icon: <FaHome />, label: 'Home' },
    { id: 'about', path: '/about', icon: <FaUser />, label: 'About' },
    { id: 'projects', path: '/projects', icon: <FaBriefcase />, label: 'Projects' },
    { id: 'experience', path: '/experience', icon: <FaTrophy />, label: 'Experience' },
    { id: 'skills', path: '/skills', icon: <FaCode />, label: 'Skills' },
    { id: 'contact', path: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  /**
   * Toggles mobile menu open/closed
   * 
   * REQUIRES: nothing
   * MODIFIES: isMobileMenuOpen state
   * EFFECTS: Opens or closes the mobile navigation menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Closes mobile menu
   * 
   * REQUIRES: nothing
   * MODIFIES: isMobileMenuOpen state
   * EFFECTS: Closes the mobile menu (used when nav item is clicked)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Overlay for mobile (click outside to close) */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Logo/Name Section */}
        <div className="navbar-header">
          <div className="logo">SS</div>
          <div className="name">Sansar Sharma</div>
        </div>

        {/* Navigation Items */}
        <ul className="nav-items">
          {navItems.map((item) => (
            <li 
              key={item.id}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <Link to={item.path} onClick={closeMobileMenu}>
                <div className="nav-icon">{item.icon}</div>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/SansarSharma" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sansar-sharma-62299929b/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;