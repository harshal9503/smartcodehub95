import React from "react";
import AndroidProjects from "./Projects/AndroidProjects";
import WebProjects from "./Projects/WebProjects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our successful projects across Android and Web platforms
        </p>

        <AndroidProjects />
        <WebProjects />
      </div>
      <style jsx>{`
        .portfolio {
          padding: 100px 0;
          background: #f8fafc;
        }
        .section-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
