import React, { useState } from "react";
import "../css/contact.css";
import { useNavigate } from "react-router-dom";

function ContactForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919752391807";

    const text = `
*New Portfolio Inquiry*

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    navigate("/thankyou", {
      state: { whatsappURL }
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        <div className="section-title text-center">
          <h2>Contact Me</h2>
          <p>Let's discuss your next project</p>
        </div>

        <div className="row">

          <div className="col-lg-5 mb-4">
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <p>
                I'm always open to discussing new opportunities,
                projects, and collaborations.
              </p>

              <div className="contact-item">
                <strong>Email</strong>
                <p>pondurupavan01@gmail.com</p>
              </div>

              <div className="contact-item">
                <strong>Phone</strong>
                <p>+91 9752391807</p>
              </div>

              <div className="contact-item">
                <strong>Location</strong>
                <p>India</p>
              </div>

            </div>
          </div>

          <div className="col-lg-7">

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary px-4">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;