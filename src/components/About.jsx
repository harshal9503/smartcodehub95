import React from "react";
import { FaUser, FaCode, FaRocket, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Smartcodehub95</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Smartcodehub95 is a premier IT solutions provider based in Noida,
              specializing in cutting-edge website, mobile app, and software
              development. With a team of skilled developers and designers, we
              transform complex business challenges into seamless digital
              experiences.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaCode />
                </div>
                <div>
                  <h4>Technical Excellence</h4>
                  <p>Expertise in latest technologies and frameworks</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Timely project completion without compromising quality</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaHandshake />
                </div>
                <div>
                  <h4>Client-Centric</h4>
                  <p>Tailored solutions to meet specific business needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          padding: 100px 0;
          background: white;
        }
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 50px;
          margin-top: 50px;
        }
        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #1e293b;
        }
        .about-text p {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .about-features {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .feature {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .feature-icon {
          font-size: 1.8rem;
          color: #4f46e5;
          background: #e0e7ff;
          padding: 15px;
          border-radius: 10px;
        }
        .feature h4 {
          margin-bottom: 5px;
          color: #1e293b;
        }
        .feature p {
          color: #64748b;
          margin: 0;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px 20px;
          border-radius: 10px;
          text-align: center;
        }
        .stat-card h3 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .stat-card p {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
