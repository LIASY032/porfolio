import React from "react";
import "./common.css";

import Particles from "react-particles-js";
import SkillBar from "react-skillbars";
import Title from "../Title";
import TwoColumnContainer from "../TwoColumnContainer";
import ExperienceCard from "../ExperienceCard";
function Skills() {
  const skills = [
    { type: "React", level: 85 },
    { type: "Javascript", level: 75 },
  ];
  return (
    <>
      <Particles
        style={{ position: "fixed", height: "100%" }}
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
          <ExperienceCard title="Software Engineer" date="8/2021 - 11/2021">
            <ul>
              <li>Create a new website</li>
              <li>Nginx deploy react by using AWS ec2.</li>
              <li>Learned PHP and Laravel for improving company backend.</li>
            </ul>
          </ExperienceCard>
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default Skills;
