import React from "react";

import Particles from "react-particles-js";
import SkillBar from "react-skillbars";
import Title from "../components/Title";
import TwoColumnContainer from "../components/TwoColumnContainer";
import ExperienceCard from "../components/ExperienceCard";
function Skills() {
  const skills = [
    { type: "React", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Node.js", level: 85 },
    { type: "React", level: 85 },
    { type: "C#", level: 75 },
    { type: "Java", level: 50 },
    { type: ".Net", level: 50 },
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
          <Title>&</Title>
          <Title>Experience</Title>

          <p>
            I have a great passion for programming and boast excellent skills
            for the job, such as EntityFramework, ASP.NET, C#, JavaScript,
            Node.js, Express.js, React, and so on. I have over 3 months of
            experience working as a software engineer in Nusunm Pty. Ltd, during
            which I created a website with React, learning php and laravel for
            improving backend, and building server with Nginx deploys website by
            using AWS ec2. Till now, I am exploring a greater challenge. I hope
            that my previous experience and skills can be put to efficient use
            in your company.
          </p>
        </TwoColumnContainer.Left>
        <TwoColumnContainer.Right>
          <SkillBar skills={skills} />
          <ExperienceCard title="Software Engineer" date="8/2021 - 11/2021">
            <ul>
              <li>Create a new website</li>
              <li>Deploying react by using AWS ec2.</li>
            </ul>
          </ExperienceCard>
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default Skills;
