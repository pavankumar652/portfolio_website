import React from "react";
import "../css/stats.css";

function Stats() {
  const stats = [
    {
      number: "15+",
      title: "Projects Completed",
    },
    {
      number: "40+",
      title: "Happy Clients",
    },
    {
      number: "3+",
      title: "Years Experience",
    },
    {
      number: "100%",
      title: "Commitment",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-4">

          {stats.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="stat-card">
                <h2>{item.number}</h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;