/**
 * ExperiencePage Component
 * 
 * Displays work experience, competitions, and extracurricular activities.
 * Shows detailed cards with contributions and learnings.
 * 
 * Abstraction Function:
 * - Represents the experience and activities section of the portfolio
 * - Each experience card contains role, duration, description, and key points
 * 
 * Representation Invariant:
 * - All experience data must be complete and accurate
 * - Dates must be in chronological order (most recent first)
 */

import React from 'react';
import './ExperiencePage.scss';

/**
 * ExperiencePage functional component
 * 
 * REQUIRES: nothing
 * MODIFIES: nothing
 * EFFECTS: Renders the experience page with detailed experience cards
 */
const ExperiencePage = () => {
  /**
   * Experience data array
   * Each experience contains:
   * - id: unique identifier
   * - logo: path to organization logo
   * - title: position/role title
   * - organization: company/organization name
   * - duration: time period
   * - description: brief overview
   * - keyPoints: array of contributions/learnings
   * - techStack: array of technologies used (optional)
   */
  const experiences = [
    {
      id: 1,
      logo: '/assets/images/BECU.jpg',
      title: 'University Competition',
      organization: 'Biomedical Engineering Course Union (BECU) Arduino Competition',
      location: 'Toronto, Ontario',
      duration: 'November 2024',
      description: 'Built a CPR feedback system in C with Arduino, programming pressure sensors, buzzer alerts, LCD output, and BPM calculations while rapidly self-learning and applying new libraries.',
      keyPoints: [
        'Programmed pressure sensors, buzzer alerts, and LCD output for real-time feedback',
        'Implemented BPM calculations to measure compression rate accuracy',
        'Rapidly self-learned and applied new C libraries during the competition',
        'Taught teammates C and Arduino basics, balancing coding tasks with mentoring',
        'Demonstrated adaptability under time constraints in a competition setting'
      ],
      techStack: ['C', 'Arduino',"Embedded Systems","Embedded C","Pressure Sensors", "OLED Display", "Real Time Feedback", "Team Competition"],
      githubLink: 'https://github.com/SansarSharma/Arduino_Competiton',
      demoLink: 'https://youtu.be/LKiS1EZJe0A?si=qgP7JQ5hgEGfooj-'
    },
    {
      id: 2,
      logo: '/assets/images/FormulaOneRacing.jpg',
      title: 'Electric Powertrain General Member',
      organization: 'Toronto Metropolitan Formula Racing Team',
      location: 'Toronto, Ontario',
      duration: 'September 2023 - December 2023',
      description: 'Gained foundational exposure to electric powertrain systems by studying design, testing, and integration processes under team mentorship.',
      keyPoints: [
        'Studied electric powertrain system design and architecture',
        'Learned about testing and integration processes for electric vehicles',
        'Collaborated with experienced team members on powertrain development',
        'Gained hands-on exposure to Formula Racing engineering practices',
        'Developed understanding of team-based engineering workflows'
      ],
      techStack: []
    }
  ];

  /**
   * Renders a single experience card
   * 
   * REQUIRES: experience object with all required fields
   * MODIFIES: nothing
   * EFFECTS: Returns JSX for an experience card with logo, details, and contributions
   */
  const renderExperienceCard = (experience) => {
    return (
      <div key={experience.id} className="experience-card">
        {/* Logo Section */}
        <div className="experience-logo">
          <img src={experience.logo} alt={experience.organization} />
        </div>

        {/* Content Section */}
        <div className="experience-content">
          <div className="experience-header">
            <h3 className="experience-title">{experience.organization}</h3>
            <p className="experience-role">{experience.title}</p>
            <p className="experience-duration">
              {experience.location} | {experience.duration}
            </p>
          </div>

          <p className="experience-description">{experience.description}</p>

          {/* Key Points */}
          <div className="key-points">
            <h4>Key Contributions:</h4>
            <ul>
              {experience.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags (if applicable) */}
          {experience.techStack.length > 0 && (
            <div className="tech-stack">
              {experience.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}

          {/* Action Buttons (only if links exist) */}
          {experience.githubLink && (
            <div className="experience-actions">
              <a href={experience.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">
                View Code
             </a>
             {experience.demoLink && (
              <a href={experience.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo">
                Demo Video
              </a>
            )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="page experience-page">
      <div className="content">
        <h1>Experience & Activities</h1>
        <br></br>
        {/* Experience Cards */}
        <div className="experiences-container">
          {experiences.map((experience) => renderExperienceCard(experience))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;