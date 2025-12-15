import React from "react";
import {
  FaCode,
  FaMobile,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Custom websites and web applications",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      desc: "Android & iOS native applications",
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Solutions",
      desc: "Enterprise software development",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      desc: "Scalable database architectures",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      desc: "Cloud deployment and management",
    },
    {
      icon: <FaShieldAlt />,
      title: "Maintenance",
      desc: "Ongoing support and updates",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services {
          padding: 100px 0;
          background: white;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        .service-card {
          padding: 40px 30px;
          text-align: center;
          border-radius: 10px;
          background: #f8fafc;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .service-card:hover .service-icon {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .service-icon {
          font-size: 3rem;
          color: #4f46e5;
          margin-bottom: 20px;
        }
        .service-card h3 {
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default Services;
