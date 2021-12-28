import React from "react";
import "./common.css";
import { Fade } from "react-reveal";

import Particles from "react-particles-js";
import SkillBar from "react-skillbars";
import Title from "../Title";
import TwoColumnContainer from "../TwoColumnContainer";
function Skills() {
  const skills = [
    { type: "Java", level: 85 },
    { type: "Javascript", level: 75 },
  ];
  return (
    <div className="common-container">
      <Particles
        style={{ position: "fixed" }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      ></Particles>

      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title>Skills</Title>
          <p>redux react css javascript java python data structure sql</p>
        </TwoColumnContainer.Left>
        <TwoColumnContainer.Right>
          <SkillBar skills={skills} />
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
      {/* <div className="flex-container">
        <h2 className=" blast animated infinite rubberBand ">ssssss</h2>
        <div>
          <Title>Skills</Title>
          <Fade bottom cascade={true}>
            <div className="container">
              <Title>Skills</Title>
            </div>
          </Fade>

          <p>redux react css javascript java python data structure sql</p>
          <SkillBar skills={skills} />
        </div>
        
      </div> */}
    </div>
  );
}

export default Skills;
