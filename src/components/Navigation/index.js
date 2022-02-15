import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
function Navigation() {
  const myNav = React.useRef();
  const updateDimensions = () => {
    if (window.innerWidth > 576) {
      // as  long as the window size which is greater than 576 modified, the nav part will appear
      window.document.getElementById("my-nav").style.display = "inline-flex";
    } else {
      // as  long as the window size which is less than 576 modified, the nav part will disappear
      window.document.getElementById("my-nav").style.display = "none";
    }
  };

  function closeNav() {
    if (window.innerWidth < 576) {
      window.document.getElementById("my-nav").style.display = "none";
    }
  }
  window.addEventListener("resize", updateDimensions);
  return (
    <>
      <div className="sticky-container my-nav-bar-container z-index-1">
        <div className="my-nav-bar z-index-1 sticky-container">
          <div className="my-brand">
            <img
              src="logo.png"
              alt="L logo"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div
            className="my-nav-button"
            onClick={() => {
              window.document.getElementById("my-nav").style.display =
                "inline-flex";
            }}
          >
            ☰
          </div>
          <div id="my-nav" className="z-index-1 my-nav " ref={myNav}>
            <div className="my-nav-close" onClick={closeNav}>
              <span>X</span>
            </div>
            <Link onClick={closeNav} to="/" className="my-nav-item z-index-1">
              Home
            </Link>
            <Link
              onClick={closeNav}
              to="/about"
              className="my-nav-item z-index-1"
            >
              About
            </Link>

            <Link
              onClick={closeNav}
              to="/skill"
              className="my-nav-item z-index-1"
            >
              Skill
            </Link>

            <Link
              onClick={closeNav}
              to="/project"
              className="my-nav-item z-index-1"
            >
              Project
            </Link>

            <Link
              onClick={closeNav}
              to="/contact"
              className="my-nav-item z-index-1"
            >
              Contact
            </Link>

            <div className="my-icons-container">
              <a
                className="my-icon z-index-1"
                href="https://github.com/LIASY032"
              >
                <Github />
              </a>
              <a
                className="my-icon z-index-1"
                href="https://www.linkedin.com/in/shiwei-liang-486509221/"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
