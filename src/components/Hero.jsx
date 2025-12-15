import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transforming Ideas Into Digital Reality</h1>
          <p className="tagline">
            Smartcodehub95 - Your Trusted Partner in Web & Mobile App
            Development
          </p>
          <p className="description">
            We create innovative, scalable, and high-performance software
            solutions that drive business growth and enhance user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn">
              View Our Work <FaArrowRight style={{ marginLeft: "8px" }} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 150px 0 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .tagline {
          font-size: 1.5rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        .description {
          font-size: 1.1rem;
          margin-bottom: 40px;
          opacity: 0.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-secondary {
          padding: 12px 30px;
          border: 2px solid white;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          background: white;
          color: #667eea;
        }
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .tagline {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
