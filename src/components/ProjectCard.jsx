import React, { useState } from "react";
import "../css/projects.css";
import SchoolERP from "../images/Schoolerpsoftware.jpg";
import LearningDashboard from "../images/Learningdashboard.jpeg";
import LegalAnalyser from "../images/Legalanalyser.webp";
import AICodeReview from "../images/AICodeReview.jpg";
import HospitalSystem from "../images/Hospitalsystem.jpeg";
import Commerce from "../images/Commerce.jpg";
import HRMS from "../images/Hrms.jpg";
import Chatboat from "../images/Chatboat.jpg";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects = [
  {
    title: "School ERP System",
    desc: "Complete school management solution with attendance, exams and fees.",
    image: SchoolERP
  },
  {
    title: "Learning Platform",
    desc: "Online learning platform with courses, quizzes and certificates.",
    image: LearningDashboard
  },
  {
    title: "A.I-Powered Legal Document Analyzer",
    desc: "Automatically summarizes and highlights key clauses in contracts using NLP.",
    image: LegalAnalyser
  },
  {
    title: "A.I-Powered Code Review Tool",
    desc: "Automatically Reviews programming code and suggests optimizations.",
    image: AICodeReview
  },
  {
    title: "Hospital Management System",
    desc: "Manage patients, appointments, billing and reports efficiently.",
    image: HospitalSystem
  },
  {
    title: "E-Commerce Platform",
    desc: "Online shopping solution with payment gateway integration.",
    image: Commerce
  },
  {
    title: "HR Management System",
    desc: "Employee attendance, payroll and performance management.",
    image: HRMS
  },
  {
    title: "AI Chatbot Assistant",
    desc: "Intelligent chatbot for customer support and automation.",
    image: Chatboat
  }
];

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="section-header">
          <h2>Featured Projects</h2>
          <button className="btn btn-primary" onClick={() => setShowAll(!showAll)}>
  {showAll ? "Show Less" : "View All Projects"}
</button>
        </div>

        <div className="row g-4">

          {projects.slice(0, showAll ? projects.length : 4) .map((project, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="project-card">

                <div className="project-image">
                  <img src={project.image} alt={project.title} className="img-fluid"/>
                </div>

                <div className="project-content">
                  <h5>{project.title}</h5>
                  <p>{project.desc}</p>

                  <button className="btn btn-outline-primary btn-sm">
                    View Project
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;