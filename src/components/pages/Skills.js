import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";

function Skills() {
  return (
    <div className="common-container">
      <div className="flex-container">
        <div>
          <Fade bottom cascade={true}>
            <div className="container">
              <AnimateText initialDelay={0.5} wordDelay={0.5}>
                Skills
              </AnimateText>
            </div>
          </Fade>

          <p>redux react css javascript java python data structure sql</p>
        </div>
        <div>this is animation part.</div>
      </div>
    </div>
  );
}

export default Skills;
