import React from "react";
import "../css/home.css";
import heroImage from "../images/Hero.jpeg";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center hero-row">

          <div className="col-lg-6">
            <span className="hero-greeting">
              Hello, I'm
            </span>

            <h1 className="hero-title">
              Pavan <span>Kumar</span>
            </h1>

            <h3 className="hero-role">
              Full Stack Developer
            </h3>

            <p className="hero-text">
            I bridge the gap between complex code and business growth.As a <span>Full-Stack Developer</span>,
            I build modern web applications and responsive websites engineered for speed, security, and user conversion. 
            I don’t just write code—I build digital assets that help your business scale.
            </p>

            <div className="hero-btns">
              <a href="https://wa.me/919752391807" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-2 me-3">Hire Me</a>

              <a href="#contact" className="btn btn-outline-primary px-4 py-2">Contact Me</a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="hero-image-box">
             <img
  src={heroImage}
  alt="Hero"
  className="hero-img"
/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;