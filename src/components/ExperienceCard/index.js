import React from "react";
import "./style.scss";
function ExperienceCard({ children, title, date }) {
  return (
    <>
      <div className="e-card">
        <div className="e-card-title">{title}</div>
        <div className="e-card-date">{date}</div>
        <div className="e-card-description">{children}</div>
      </div>
    </>
  );
}

export default ExperienceCard;
