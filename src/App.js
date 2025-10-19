/**
 * App Component
 * 
 * Main application component that serves as the root of the portfolio.
 * Handles routing between different pages using React Router.
 * 
 * Abstraction Function:
 * - Contains the overall application structure with sidebar navigation and page routing
 * - Routes user to different pages based on URL path
 * 
 * Representation Invariant:
 * - Router must wrap all routed components
 * - All route paths must correspond to valid page components
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './App.scss';

/**
 * App functional component
 * 
 * REQUIRES: All page components must be properly imported
 * MODIFIES: DOM rendering based on current route
 * EFFECTS: 
 * - Renders the navigation sidebar on all pages
 * - Renders appropriate page component based on current URL path
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar navigation - visible on all pages */}
        <Navbar />
        
        {/* Main content area with page routing */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;