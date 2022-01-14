import React from "react";
import "./common.css";

import Example from "../3dCarousel";

import Title from "../Title";
import TwoColumnContainer from "../TwoColumnContainer";
import CitySvg from "../CitySVG";

function About() {
  return (
    <>
      <CitySvg />
      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title>About</Title>{" "}
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
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
          <Example />
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
    </>
  );
}

export default About;
