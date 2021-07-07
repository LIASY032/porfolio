import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import Example from "../3dCarousel";

function About() {
  return (
    <div className="common-container">
      <div className="flex-container">
        <div>
          <Fade bottom cascade={true}>
            <div className="text-container">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t </span>

              <span>m</span>
              <span>e</span>
            </div>
          </Fade>

          {/* <h1>About me</h1> */}
          <p>Hi Guys,</p>
          <p>
            I am Shiwei Liang coming from China. Now I am studying in University
            of South Australia.
          </p>
        </div>
        <div>
          <Example />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
