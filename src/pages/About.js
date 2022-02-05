import React from "react";

import Example from "../components/3dCarousel";

import Title from "../components/Title";
import TwoColumnContainer from "../components/TwoColumnContainer";
import CitySvg from "../components/Background/CitySVG";
import Embers from "../components/Background/Embers";
import MyCanvas from "../components/Background/Embers/MyCanvas";

function About() {
  return (
    <>
      <CitySvg />
      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title>About</Title>{" "}
          <Title>me</Title>
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
        
     <MyCanvas/>
        
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default About;
