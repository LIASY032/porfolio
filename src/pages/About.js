import React from "react";

import Title from "../components/Title";
import TwoColumnContainer from "../components/TwoColumnContainer";
import CitySvg from "../components/Background/CitySVG";

import MyCanvas from "../components/Background/Embers/MyCanvas";

function About() {
  // const tagcanvas = window.document.getElementById("tagcanvas");
  // const body = window.document.getElementsByTagName("body")[0];

  return (
    <>
      <CitySvg />
      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title>About</Title> <Title>me</Title>
          <p>Hi Guys,</p>
          <p>
            I am Shiwei Liang coming from China. Now I am studying in University
            of South Australia.
          </p>
          <p>
            Since I learned my first programming language (python) on Youtube, I
            was fascinated by programming.
          </p>
          <p>
            I always spend my time to explore new technologies and improve my
            existing skills.
          </p>
        </TwoColumnContainer.Left>
        <TwoColumnContainer.Right>
          <MyCanvas />
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default About;
