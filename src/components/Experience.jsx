import React from "react";
import "../css/experience.css";

function Experience() {
  const timeline = [
    {
      year: "2025 - Present",
      title: "Full Stack Developer (Freelance)",
      description:
        "Building responsive web applications, business websites and ERP solutions using modern technologies."
    },
    {
      year: "2024 - 2025",
      title: "Frontend Developer",
      description:
        "Developed interactive user interfaces and reusable components using React and Bootstrap."
    },
    {
      year: "2023 - 2024",
      title: "Full Stack Developement Online Internship",
      description:
        "Developed interactive user interfaces and reusable components and JWT, Authentications using React, NOdejs, MongoDB and Bootstrap."
    },
    {
      year: "2022 - 2023",
      title: "Learning & Projects",
      description:
        "Building small projects on JavaScript, React, Node.js, MongoDB and real-world project development."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">

        <div className="section-title text-center">
          <h2>Experience & Journey</h2>
          <p>My learning and development path</p>
        </div>

        <div className="timeline">

          {timeline.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;