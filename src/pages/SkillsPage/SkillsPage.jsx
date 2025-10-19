/**
 * SkillsPage Component
 * 
 * Displays technical skills organized by category.
 * Features interactive flip cards that reveal years of experience and context.
 * 
 * Abstraction Function:
 * - Represents the skills showcase section of the portfolio
 * - Each skill card flips to show additional context on hover
 * 
 * Representation Invariant:
 * - All skills must have both front (name) and back (experience) content
 * - Skills must be organized into valid categories
 */

import React from 'react';
import './SkillsPage.scss';

/**
 * SkillsPage functional component
 * 
 * REQUIRES: nothing
 * MODIFIES: nothing
 * EFFECTS: Renders the skills page with categorized flip cards that animate on page load
 */
const SkillsPage = () => {
  /**
   * Skills data organized by category
   * Each skill contains:
   * - name: technology name
   * - years: years of experience
   * - context: how/where the skill was learned
   */
  const skillsData = {
    programmingLanguages: [
      { name: 'Java', years: '4 years', context: 'Started during highschool, continued through university' },
      { name: 'Python', years: '2 years', context: 'Learned in university for coursework and projects' },
      { name: 'TypeScript', years: '1 year', context: 'Self-taught for full-stack web development' },
      { name: 'JavaScript', years: '2 years', context: 'Learned for web development and interactive projects' },
      { name: 'C', years: '2 years', context: 'University coursework and Arduino projects' },
      { name: 'HTML', years: '3 years', context: 'Self-taught for web development' },
      { name: 'CSS', years: '3 years', context: 'Self-taught for styling web applications' },
      { name: 'VHDL', years: '1 year', context: 'University coursework in digital systems' }
    ],
    frameworks: [
      { name: 'Spring Boot', years: '1 year', context: 'Self-taught for building web applications' },
      { name: 'JavaFX', years: '1 year', context: 'University coursework and personal projects' },
      { name: 'React.js', years: '1 year', context: 'Self-taught for modern front-end development' },
      { name: 'Angular.js', years: '6 months', context: 'Explored for front-end development' },
      { name: 'Node.js', years: '1 year', context: 'Self-taught for backend JavaScript development' },
      { name: 'Phaser.js', years: '1 year', context: 'Used for game development projects' }
    ],
    tools: [
      { name: 'GitHub', years: '3 years', context: 'Version control for all projects and collaboration' },
      { name: 'MongoDB', years: '1 year', context: 'NoSQL database for web applications' },
      { name: 'IntelliJ', years: '3 years', context: 'Primary IDE for Java development' },
      { name: 'PyCharm', years: '3 years', context: 'Primary IDE for Python development' },
      { name: 'Visual Studio Code', years: '2 years', context: 'Primary editor for web development' },
      { name: 'MySQL', years: '1 year', context: 'Relational database management and design' },
      { name: 'Microsoft 365', years: '3 years', context: 'Used for university course documentation and productivity' },
      { name: 'MATLAB', years: '3 year', context: 'University coursework for engineering analysis' }
    ],
    design: [
      { name: 'OOP', years: '4 years', context: 'Started during highschool, continued through university' },
      { name: 'Design Patterns', years: '1 year', context: 'Learned through university, and applied to passion projects' },
      { name: 'MVC', years: '3 years', context: 'Applied across multiple projects to separate concerns and improve scalability and maintainability' },
      { name: 'Database Architecture', years: '2 months', context: 'Learn through university' }
    ]
  };

  /**
   * Renders a flip card for a single skill
   * 
   * REQUIRES: skill object with name, years, and context
   * MODIFIES: nothing
   * EFFECTS: Returns JSX for a flip card that shows skill name on front and details on back
   */
  const renderSkillCard = (skill, index) => {
    return (
      <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="card-inner">
          {/* Front of card */}
          <div className="card-front">
            <h3>{skill.name}</h3>
          </div>
          
          {/* Back of card */}
          <div className="card-back">
            <p className="years">{skill.years}</p>
            <p className="context">{skill.context}</p>
          </div>
        </div>
      </div>
    );
  };

  /**
   * Renders a category section with title and skill cards
   * 
   * REQUIRES: title (string), skills (array), delay (number)
   * MODIFIES: nothing
   * EFFECTS: Returns JSX for a category box with animated entrance
   */
  const renderCategory = (title, skills, delay) => {
    return (
      <div className="skill-category" style={{ animationDelay: `${delay}s` }}>
        <h2>{title}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => renderSkillCard(skill, index))}
        </div>
      </div>
    );
  };

  return (
    <div className="page skills-page">
      <div className="content">
        <h1>Technical Skills</h1>
        <br></br>
        {/* Categories with staggered animation */}
        {renderCategory('Programming Languages', skillsData.programmingLanguages, 0.2)}
        {renderCategory('Frameworks & Libraries', skillsData.frameworks, 0.4)}
        {renderCategory('Tools & Technologies', skillsData.tools, 0.6)}
        {renderCategory('Software Design & Architecture', skillsData.design, 0.8)}
      </div>
    </div>
  );
};

export default SkillsPage;