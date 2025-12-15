import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaUser />
              </div>
              <div>
                <h4>MANDEEP SINGH</h4>
                <p>SOFTWARE DEVELOPER</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:9516087501">9516087501</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:mandeepsr712@gmail.com">
                  mandeepsr712@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Address</h4>
                <p>Noida Sector 65 C-22</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          padding: 100px 0;
          background: #f8fafc;
        }
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 50px;
          margin-top: 50px;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .info-card:hover {
          transform: translateX(10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        .info-icon {
          font-size: 1.5rem;
          color: #4f46e5;
        }
        .info-card h4 {
          margin-bottom: 5px;
          color: #1e293b;
        }
        .info-card a {
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s;
        }
        .info-card a:hover {
          color: #4f46e5;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4f46e5;
        }
        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
