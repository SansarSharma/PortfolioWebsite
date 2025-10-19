/**
 * HomePage Component
 * 
 * Landing page of the portfolio - first page visitors see.
 * Displays introduction, name, title, and call-to-action buttons.
 * 
 * Abstraction Function:
 * - Represents the hero/landing section of the portfolio
 * - Provides quick navigation to Projects and Contact sections
 * 
 * Representation Invariant:
 * - Content must be concise and impactful
 * - CTA buttons must link to valid routes
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

/**
 * HomePage functional component
 * 
 * REQUIRES: React Router context (must be inside Router component)
 * MODIFIES: nothing
 * EFFECTS: Renders the landing page with hero content and CTA buttons
 */
const HomePage = () => {
  return (
    <div className="page home-page">
      <div className="content">
        <h1>Hi, I'm Sansar Sharma</h1>
        <h2>Computer Engineering Student</h2>
        <p>Toronto Metropolitan University | Expected Graduation April 2028</p>
        
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;