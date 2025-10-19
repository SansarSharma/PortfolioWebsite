/**
 * ProjectsPage Component
 * 
 * Displays portfolio projects in a grid layout.
 * Shows completed projects and works in progress.
 * 
 * Abstraction Function:
 * - Represents the projects showcase section of the portfolio
 * - Each project card contains title, description, tech stack, and links
 * 
 * Representation Invariant:
 * - All project data must be complete and accurate
 * - GitHub and demo links must be valid URLs
 */

import React from 'react';
import './ProjectsPage.scss';

/**
 * ProjectsPage functional component
 * 
 * REQUIRES: nothing
 * MODIFIES: nothing
 * EFFECTS: Renders the projects page with project cards in a responsive grid
 */
const ProjectsPage = () => {
  /**
   * Project data array
   * Each project contains:
   * - id: unique identifier
   * - title: project name
   * - description: brief overview
   * - techStack: array of technologies used
   * - githubLink: link to GitHub repository
   * - demoLink: link to demo video/live site
   * - coverType: 'emoji' or 'image'
   * - coverContent: emoji character or image path
   * - inProgress: boolean indicating if project is still being developed
   */
  const projects = [
    {
      id: 1,
      title: 'Statistical Website for Soccer Players',
      description: 'Built a Spring Boot + MongoDB web application that analyzed stats for 50+ professional soccer players, scraping data on goals, assists, and trophies. Implemented a custom ranking formula to generate instant player comparisons and performance insights.',
      techStack: ['Java', 'Spring Boot', 'MongoDB', 'AWS', 'JSoup', "Maven", "OOP", "HTML", "CSS", "MVC"],
      githubLink: 'https://github.com/SansarSharma/SoccerStats',
      demoLink: null,
      coverType: 'emoji',
      coverContent: '⚽',
      inProgress: false
    },
    {
      id: 2,
      title: 'Bookstore Application',
      description: 'Built a JavaFX bookstore application with two roles: admin (manage books/customers) and customer (shop, cart, purchases), applying OOP and the State Design Pattern for account status, loyalty points, and access control. Migrated storage from files to MySQL + JDBC architecture.',
      techStack: ['Java', 'JavaFX', 'MySQL', 'Maven', 'JDBC', "OOP", "Design Patterns", "MVC", "Inventory Management System", "GUI", "Refactored Project"],
      githubLink: 'https://github.com/SansarSharma/BookstoreApplication',
      demoLink: null,
      coverType: 'emoji',
      coverContent: '📚',
      inProgress: false
    },
    {
      id: 3,
      title: 'Interactive Rock Paper Scissors Game',
      description: 'Refactored a legacy single-file Rock-Paper-Scissors game into a React + Phaser.js application, applying OOP to build 15+ components. Designed a custom Insane Mode featuring trivia mechanics, adaptive sound effects, and real-time HUD animations.',
      techStack: ['JavaScript', 'React.js', 'Phaser.js', "OOP", "MVC", "GUI", "Refactored Project"],
      githubLink: 'https://github.com/SansarSharma/RPS_Remastered',
      demoLink: null,
      coverType: 'emoji',
      coverContent: '✊📄✂️',
      inProgress: false
    },
    {
      id: 4,
      title: 'Money Manager Application',
      description: 'Built a Python + PyQt6 personal finance tool supporting Excel file upload/editing and manual expense entry, with categorized budgets (Housing, Food, Subscriptions, etc.), real-time charts, and automatic Excel export on exit. Applied advanced OOP and design patterns for scalability.',
      techStack: ['Python', 'PyQt6', 'Excel', 'Pandas', "OOP", "MVC", "GUI", "Design Patterns"],
      githubLink: 'https://github.com/SansarSharma/MoneyManager',
      demoLink: null,
      coverType: 'image',
      coverContent: '/assets/images/moneymanager.png',
      inProgress: false
    },
    {
      id: 5,
      title: 'Blackjack',
      description: 'Refactored a Java Blackjack game by migrating legacy lab code to a Maven + IntelliJ project, restructuring with OOP principles to mirror real-world Blackjack rules and enable cleaner, maintainable architecture.',
      techStack: ['Java', 'Maven', 'OOP'],
      githubLink: 'https://github.com/SansarSharma/Blackjack',
      demoLink: null,
      coverType: 'emoji',
      coverContent: '🃏',
      inProgress: false
    },
    {
      id: 6,
      title: 'IdeaBoard',
      description: 'A full-stack task management application for organizing ideas and projects. Built with Spring Boot backend and React frontend, featuring user authentication, real-time updates, and collaborative features.',
      techStack: ['Javascript', 'Typescript', 'React', 'Angular.js'],
      githubLink: null,
      demoLink: null,
      coverType: 'emoji',
      coverContent: '💡',
      inProgress: true
    }
  ];

  /**
   * Renders a single project card
   * 
   * REQUIRES: project object with all required fields
   * MODIFIES: nothing
   * EFFECTS: Returns JSX for a project card with cover, info, and action buttons
   */
  const renderProjectCard = (project) => {
    return (
      <div key={project.id} className="project-card">
        {/* Cover Image/Emoji Section */}
        <div className="project-cover">
          {project.coverType === 'emoji' ? (
            <div className="emoji-cover">{project.coverContent}</div>
          ) : (
            <img src={project.coverContent} alt={project.title} className="image-cover" />
          )}
          
          {/* In Progress Badge */}
          {project.inProgress && (
            <div className="progress-badge">
              <span>IN PROGRESS</span>
            </div>
          )}
        </div>

        {/* Project Info Section */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          {/* Tech Stack Tags */}
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="project-actions">
            {project.inProgress ? (
              <button className="btn-disabled" disabled>Coming Soon</button>
            ) : (
              <>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">
                  View Code
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-demo">
                  Demo (soon)
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page projects-page">
      <div className="content">
        <h1>My Projects</h1>
        <br></br>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => renderProjectCard(project))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;