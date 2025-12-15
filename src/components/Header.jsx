import React, { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <FaCode className="logo-icon" />
            <span>Smartcodehub95</span>
          </div>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 700;
          color: #4f46e5;
        }
        .logo-icon {
          font-size: 2rem;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #4f46e5;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #4f46e5;
        }
        @media (max-width: 768px) {
          .nav-toggle {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            flex-direction: column;
            background: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 20px;
          }
          .nav-links.active {
            left: 0;
          }
          .nav-links a {
            margin: 15px 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
