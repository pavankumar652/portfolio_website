import React from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaPuzzlePiece,
  FaDatabase,
  FaUsers,
  FaGitAlt,
  FaProjectDiagram
} from "react-icons/fa";
import "../css/skills.css";

function Skills() {
  const technicalSkills = [
    { name: "HTML5", percentage: "95%" },
    { name: "CSS3", percentage: "90%" },
    { name: "JavaScript", percentage: "85%" },
    { name: "Bootstrap", percentage: "90%" },
    { name: "React.js", percentage: "80%" },
    { name: "Node.js", percentage: "75%" },
    { name: "Express.js", percentage: "75%" },
    { name: "Debugging & Testing", percentage: "70%" },
    { name: "MongoDB", percentage: "70%" }
  ];

  const otherSkills = [
  { icon: <FaCode />, name: "SAP ABAP" },
  { icon: <FaServer />, name: "REST APIs" },
  { icon: <FaMobileAlt />, name: "Mobile App Development" },
  { icon: <FaPuzzlePiece />, name: "UI/UX Basics" },
   { icon: <FaGitAlt />, name: "Git & GitHub" },
  { icon: <FaProjectDiagram />, name: "System Design" },
  { icon: <FaDatabase />, name: "Problem Solving" },
  { icon: <FaUsers />, name: "Team Leadership" },
];

  return (
    <section className="skills-section" id="skills">
      <div className="container">

        <div className="section-title text-center">
          <h2>My Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="row">

          <div className="col-lg-8">
            <div className="skills-card">

              <h4 className="mb-4">Technical <span>Skills</span></h4>

              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">

                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}</span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          <div className="col-lg-4">
            <div className="other-skills-card">

              <h4 className="mb-4">Other Skills</h4>

              <div className="skills-grid">
  {otherSkills.map((skill, index) => (
    <div key={index} className="skill-box">

      <div className="skill-icon">
        {skill.icon}
      </div>

      <span>{skill.name}</span>

    </div>
  ))}
</div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;