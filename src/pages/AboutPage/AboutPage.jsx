/**
 * AboutPage Component
 * 
 * Displays information about Sansar Sharma including bio, education,
 * skills overview, and personal interests.
 * 
 * Abstraction Function:
 * - Represents the "About Me" section of the portfolio
 * - Provides visitors with background information and personality
 * 
 * Representation Invariant:
 * - Content must be authentic and professional
 * - All external links must be valid
 */

import React from 'react';
import './AboutPage.scss';

/**
 * AboutPage functional component
 * 
 * REQUIRES: nothing
 * MODIFIES: nothing
 * EFFECTS: Renders the about page with bio, education, skills, and interests
 */
const AboutPage = () => {
  return (
    <div className="page about-page">
      <div className="content">
        <h1>About Me</h1>
        
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image">
            <div className="placeholder-avatar">SS</div>
          </div>
          
          <div className="profile-bio">
            <h2>Hi, I'm Sansar! 👋</h2>
            <p className>
              I'm a Computer Engineering student at Toronto Metropolitan University, pursuing the Software Engineering option. 
              I'm passionate about programming, especially when it comes to developing creative applications, data-driven software 
              solutions, and exploring how technology can make complex systems more efficient and user-friendly.
            </p>
            <p>
              I chose Computer Engineering because I've always been curious about how hardware and software interact to bring ideas 
              to life. From embedded systems to fullstack and cloud-based applications I enjoy learning and turning technical concepts into 
              practical projects that solve real problems.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="section education-section">
          <h2>🎓 Education</h2>
          <div className="education-card">
            <h3>Toronto Metropolitan University</h3>
            <p className="degree">Bachelor of Engineering – Computer Engineering (Software Option)</p>
            <p className="graduation">Expected Graduation: April 2028</p>
            <p className="coursework">
              <strong>Relevant Coursework:</strong> Algorithms and Data Structures, Object-Oriented Analysis and Design, 
              Database Systems I, Software Systems, Digital Systems, Discrete Mathematics for Engineers
            </p>
          </div>
        </div>

        {/* Skills Highlight Section */}
        <div className="section skills-highlight-section">
          <h2>💻 Technical Skills Snapshot</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Specializations</h3>
              <div className="skill-tags">
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Cloud Computing (AWS)</span>
                <span className="skill-tag">Design Patterns</span>
              </div>
            </div>
          </div>
          <p className="skills-note">
            Visit my <a href="/skills">Skills page</a> for a complete breakdown!
          </p>
        </div>

        {/* Interests Section */}
        <div className="section interests-section">
          <h2>Beyond the Code</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">⚽</div>
              <h3>Soccer</h3>
              <p>Passionate fan and player. Built a stats website to analyze players across eras!</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">🌌</div>
              <h3>Astronomy</h3>
              <p>Fascinated by space exploration and the cosmos.</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">🎮</div>
              <h3>Gaming</h3>
              <p>Enjoy strategic and creative games. Built a Rock-Paper-Scissors game with custom modes!</p>
            </div>
            
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <p>Want to see what I've built?</p>
          <a href="/projects" className="cta-button">View My Projects</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;