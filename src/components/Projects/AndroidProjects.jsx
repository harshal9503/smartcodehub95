import React from "react";
import { FaGooglePlay, FaMobileAlt } from "react-icons/fa";

const AndroidProjects = () => {
  const androidApps = [
    {
      name: "Cricket Wickets",
      link: "https://play.google.com/store/apps/details?id=com.cricketwickets",
      category: "Sports",
    },
    {
      name: "Second Income",
      link: "https://play.google.com/store/apps/details?id=com.Second.income",
      category: "Finance",
    },
    {
      name: "Property Bazar",
      link: "https://play.google.com/store/apps/details?id=com.propertysbazar",
      category: "Real Estate",
    },
    {
      name: "Nicotex Begin",
      link: "https://play.google.com/store/apps/details?id=com.nicotex.begin",
      category: "Health",
    },
    {
      name: "Ittzy App",
      link: "https://play.google.com/store/apps/details?id=com.ittzyapp.app",
      category: "Utility",
    },
    {
      name: "Indirera",
      link: "https://play.google.com/store/apps/details?id=com.Indirera",
      category: "E-commerce",
    },
    {
      name: "Right Human",
      link: "https://play.google.com/store/search?q=right+human&c=apps",
      category: "HR Tech",
    },
  ];

  return (
    <div className="projects-section">
      <div className="section-header">
        <FaMobileAlt className="section-icon" />
        <h3>Android Applications</h3>
      </div>
      <div className="projects-grid">
        {androidApps.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-icon">
              <FaGooglePlay />
            </div>
            <div className="project-info">
              <h4>{app.name}</h4>
              <span className="project-category">{app.category}</span>
            </div>
            <div className="project-link">View on Play Store →</div>
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

export default AndroidProjects;
