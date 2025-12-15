import React from "react";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

const WebProjects = () => {
  const webProjects = [
    {
      name: "Gopiban",
      link: "https://www.gopiban.com/",
      category: "Finance",
    },
    {
      name: "Blue Mall",
      link: "https://bluemall.in/",
      category: "E-commerce",
    },
    {
      name: "Right Human",
      link: "https://righthuman.in/",
      category: "HR Tech",
    },
    {
      name: "Gadget-e-ishq",
      link: "https://gadget-e-ishq.store/",
      category: "E-commerce",
    },
    {
      name: "Credence Research",
      link: "https://www.credenceresearch.com/",
      category: "Research",
    },
    {
      name: "Homytangs",
      link: "https://homytangs.com/",
      category: "E-commerce",
    },
  ];

  return (
    <div className="projects-section">
      <div className="section-header">
        <FaGlobe className="section-icon" />
        <h3>Web Applications</h3>
      </div>
      <div className="projects-grid">
        {webProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-icon">
              <FaGlobe />
            </div>
            <div className="project-info">
              <h4>{project.name}</h4>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-link">
              <FaExternalLinkAlt /> Visit Website
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        .projects-section {
          margin-bottom: 60px;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        .section-icon {
          font-size: 2rem;
          color: #4f46e5;
        }
        .section-header h3 {
          font-size: 1.8rem;
          color: #1e293b;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }
        .project-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        .project-icon {
          font-size: 2rem;
          color: #4f46e5;
          margin-bottom: 15px;
        }
        .project-info h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: #1e293b;
        }
        .project-category {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #4f46e5;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .project-link {
          margin-top: 15px;
          color: #4f46e5;
          font-weight: 500;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WebProjects;
