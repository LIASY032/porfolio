import React from "react";
import "./common.css";
import { Fade } from "react-reveal";

function Skills() {
  return (
    <div className="common-container">
      <div className="flex-container">
        <div>
          <Fade bottom cascade={true}>
            <div className="text-container">
              <span>S</span>
              <span>k</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>

              <span>s</span>
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
