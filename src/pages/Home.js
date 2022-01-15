import React from "react";

import { Button } from "react-bootstrap";
import TwoColumnContainer from "../components/TwoColumnContainer";
import Title from "../components/Title";
import HomeBackground from "../components/HomeBackground";

function Home() {
  return (
    <>
      <TwoColumnContainer>
        <TwoColumnContainer.Left>
          <Title> Hi,</Title>
          <br />
          <Title>I'm</Title>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <Title> Shiwei </Title>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <span style={{ display: "inline-flex" }}>&nbsp;</span>
          <Title>Liang</Title>
          <br />
          <Button variant="warning" href="/contact" size="lg">
            Contact me
          </Button>
        </TwoColumnContainer.Left>
        <TwoColumnContainer.Right>
          <img src="logo.png" alt="L logo"></img>
        </TwoColumnContainer.Right>
      </TwoColumnContainer>
      <HomeBackground></HomeBackground>
    </>
  );
}

export default Home;
