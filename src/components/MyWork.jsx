import React, { useState } from "react";
import "../css/mywork.css";
import Weather from "../images/Weather.png";
import password from "../images/password.jpeg";
import TodoList from "../images/Todolist.png";
import stopwatch from "../images/stopwatch.jpeg";
import technicalquiz from "../images/technicalquiz.png";
import calculator from "../images/calculator.png";
import movix from "../images/movix.jpeg";
import food from "../images/food.jpeg";
import snake from "../images/snake.jpeg";
import Qrcode from "../images/Qrcode.png";
import Taskmanagementapp from "../images/Taskmanagementapp.png";

function MyWork() {

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Weather App",
      desc: "A mobile & computer application that provides real-time weather information, such as temperature, precipitation, and wind speed, for your current location or any other specified location.",
      image: Weather,
      link: "https://github.com/pavankumar652/WeatherNow.git"
    },
    {
      title: "Password Generator",
      desc: "Creates strong, unique passwords for online accounts by combining different character types, such as lowercase letters, uppercase letters, numbers, and symbols.",
      image: password,
      link: "https://pavankumar652.github.io/password-generator/"
    },
    {
      title: "To Do List",
      desc: "It helps users manage daily tasks, schedules, and reminders to improve organization and productivity.",
      image: TodoList,
      link: "https://pavankumar652.github.io/To-Do-List/"
    },
    {
      title: "Stopwatch",
      desc: "A digital tool that measures time for a variety of activities, from sports and workouts to cooking and studying.",
      image: stopwatch,
      link: "https://pavankumar652.github.io/Stopwatch/"
    },
    {
      title: "Technical Quiz",
      desc: "A mobile & laptop application designed to test and improve users' knowledge of technology through questions on topics like computers, mobile phones, gadgets, and programming.",
      image: technicalquiz,
      link: "https://pavankumar652.github.io/Quizz-App/"
    },
    {
      title: "Calculator",
      desc: "A software program found on many devices, including smartphones and computers, that performs mathematical calculations ranging from basic arithmetic to complex scientific functions.",
      image: calculator,
      link: "https://pavankumar652.github.io/calculator/"
    },
    {
      title: "Movix",
      desc: "A web-based movie and TV show discovery platform built with React and Redux, or a delivery and logistics management app for Libya that allows users to track shipments, calculate prices, and manage payments.",
      image: movix,
      link: "https://github.com/pavankumar652/movix-app.git"
    },
    {
      title: "Food Website",
      desc: "A software application that connects consumers to local restaurants, grocery stores, and other merchants, allowing them to order food and other goods for home delivery.",
      image: food,
      link: "https://github.com/pavankumar652/Food-del.git"
    },
    {
      title: "Snake Game",
      desc: "A smaller, portable version of the classic game, often built on microcontrollers like the ESP32 for a handheld console, or coded for desktop or web use.",
      image: snake,
      link: "https://github.com/pavankumar652/snake-game-mini.git"
    },
    {
      title: "Task Management App",
      desc: "A full-stack task management application built using React, Node.js, Express, and MongoDB. Users can create, update, delete, and track tasks with authentication, role-based access, and real-time UI updates for better productivity.",
      image: Taskmanagementapp,
      link: "https://github.com/pavankumar652/Task_Manage.git"
    },
    {
      title: "QR Code Generator",
      desc: "A tool that allows users to create QR codes for various types of information, such as website links, text, email, or contacts.",
      image: Qrcode,
      link: "https://pavankumar652.github.io/QR-code-generator/"
    }
  ];

  return (
    <section className="mywork-section" id="mywork">
      <div className="container">

        <div className="section-header">
          <h2>My Work</h2>

          <button
            className="btn btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>

        <div className="row g-4">

          {projects
            .slice(0, showAll ? projects.length : 4)
            .map((project, index) => (
              <div className="col-lg-3 col-md-6" key={index}>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <div className="project-card">

                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid"
                      />
                    </div>

                    <div className="project-content">
                      <h5>{project.title}</h5>
                      <p>{project.desc}</p>
                    </div>

                  </div>
                </a>

              </div>
            ))}

        </div>

      </div>
    </section>
  );
}

export default MyWork;