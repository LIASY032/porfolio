import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
function Navigation() {
  return (
    <>
      <div className="my-nav">
        <Link to="/" className="my-nav-item">
          Home
        </Link>
        <Link to="/about" className="my-nav-item">
          About
        </Link>

        <Link to="/skill" className="my-nav-item">
          Skill
        </Link>

        <Link to="/project" className="my-nav-item">
          Project
        </Link>

        <Link to="/contact" className="my-nav-item">
          Contact
        </Link>

        <div className="my-icons-container">
          <a className="my-icon" href="https://github.com/LIASY032">
            <Github />
          </a>
          <a
            className="my-icon"
            href="https://www.linkedin.com/in/shiwei-liang-486509221/"
          >
            <Linkedin style={{ color: "inherit" }} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
