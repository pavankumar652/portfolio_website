import React from "react";
import "../css/services.css";

function Services() {
  const services = [
    {
      title: "Webpage Design",
      desc: "Modern responsive websites using React, Bootstrap and JavaScript."
    },
    {
        title: "Logo Design",
        desc: "We Design Modern Logo for Brands and Businesses."
    },
    {
      title: "software Applications Development",
      desc: "Modern responsive websites using React, Bootstrap and JavaScript."
    },
    {
      title: "A.I Agents",
      desc: "Modern A.I Products, Chatbots using Python, L.L.M, Machine Learning and Algorthim."
    },
    {
      title: "Fullstack Development",
      desc: "Interactive and user-friendly interfaces with modern UI design."
    },
    {
      title: "ERP Solutions",
      desc: "Business and school ERP application development."
    },
    {
        title: "Mobile App Development",
        desc: "We provide Mobile apps for businesses."
    },
    {
      title: "Website Maintenance",
      desc: "Performance optimization, updates and technical support."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">

        <div className="section-title text-center">
          <h2>Services</h2>
          <p>Digital Solutions & Services</p>
        </div>

        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="service-card">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;