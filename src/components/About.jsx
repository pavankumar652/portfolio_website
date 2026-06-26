import React from "react";
import "../css/about.css";
import images from "../images/pavanimg.jpeg";
import resume from "../images/pavan kumar(full Stack Developer)-Resume.pdf";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

         <div className="row align-items-center">

          <div className="col-lg-5">
            <div className="about-image">
  <img
    src={images}
    alt="Pavan Kumar"
    className="img-fluid"
  />
</div>
          </div>

          <div className="col-lg-7">

            <h2 className="about-title">
              About <span className="highlight">Me</span>
            </h2>

            <h4 className="about-subtitle">
              Who I Am
            </h4>

            <p className="about-text">
              I am a passionate and results-driven Full Stack Developer with expertise in designing, developing, and deploying modern web applications, business solutions, ERP systems, and responsive websites. 
              I enjoy transforming innovative ideas into practical digital solutions that help businesses improve efficiency, productivity, and growth.
              My experience includes working with front-end and back-end technologies to build user-friendly, scalable, and high-performance applications. I am skilled in creating professional websites,
              management systems, educational platforms, and customized software solutions tailored to client requirements.
              I believe in clean code, creative problem-solving, continuous learning, and maintaining strong relationships with clients through transparent communication and on-time project delivery. My goal is to develop innovative technology solutions that create real value and make a positive impact in the digital world.
            </p>

            <div className="about-points">

              <div>✔ Clean & Efficient Code</div>
              <div>✔ On-Time Project Delivery</div>
              <div>✔ Client Focused Approach</div>
              <div>✔ Continuous Learning</div>

            </div>

            <div className="row info-boxes">

              <div className="col-md-6">
                <div className="info-card">
                  <strong>Name</strong>
                  <p>Pavan Kumar</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card">
                  <strong>Location</strong>
                  <p>India</p>
                </div>
              </div>

            </div>

            <a
  href={resume}
  download="Pavan_Kumar_Resume.pdf"
  className="btn btn-primary mt-4"
>
  Download CV
</a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;