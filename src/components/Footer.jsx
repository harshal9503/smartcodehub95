import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Smartcodehub95</h3>
            <p>Website, Mobile App, and Software Development</p>
          </div>

          <div className="footer-social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Smartcodehub95. All rights reserved.
          </p>
          <p className="designer-credit">Designed by Harshal Sharma</p>
          <p>Developed by MANDEEP SINGH</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: #1e293b;
          color: #cbd5e1;
          padding: 60px 0 20px;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .footer-logo h3 {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }
        .footer-social {
          display: flex;
          gap: 20px;
        }
        .social-link {
          color: #cbd5e1;
          font-size: 1.2rem;
          transition: color 0.3s;
        }
        .social-link:hover {
          color: #4f46e5;
        }
        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .designer-credit {
          color: #4f46e5;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .footer-content,
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
