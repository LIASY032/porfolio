import React from "react";
import "./home.css";
import "./common.css";

import { Button } from "react-bootstrap";
import TwoColumnContainer from "../TwoColumnContainer";
import Title from "../Title";
import HomeBackground from "../HomeBackground";

function Home() {
  return (
    <>
      <HomeBackground></HomeBackground>
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
    </>
  );
}

export default Home;
