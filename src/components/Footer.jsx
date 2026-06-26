import React from "react";
import "../css/footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          <div className="col-md-4 col-lg-4 mb-4">
            <h3 className="footer-logo">Pavan Kumar</h3>
            <p>
              Building Scalable web platforms, A.I-powered software, Chatbots that 
              helps businesses grow and operate Smarter.
            </p>
            <div className="social-icons">
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

          <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>

          <a href="https://wa.me/919752391807" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
          </div>


          <div className="col-lg-4 mb-4">
            <h4>Quick Links</h4>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <h4>Contact</h4>

            <p>Email: pondurupavan01@gmail.com</p>
            <p>Phone: +91 9752391807</p>
            <p>Location: India</p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            © 2026 Pavan Kumar. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;