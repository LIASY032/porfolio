import React from "react";
import { Circle, Square, Triangle } from "react-bootstrap-icons";
import "./home.css";
import "./common.css";
import { Fade } from "react-reveal";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import TwoColumnContainer from "../TwoColumnContainer";
import Title from "../Title";
import HomeBackground from "../HomeBackfround";

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
