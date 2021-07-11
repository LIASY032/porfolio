import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import Example from "../3dCarousel";
import { Container, Row, Col } from "react-bootstrap";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";

function About() {
  return (
    <div className="common-container">
      <Container className="padding-top-half">
        <Row>
          <Col xs={6}>
            <Fade bottom cascade={true}>
              <AnimateText>About me</AnimateText>
            </Fade>
            <p>Hi Guys,</p>
            <p>
              I am Shiwei Liang coming from China. Now I am studying in
              University of South Australia.
            </p>
          </Col>
          <Col xs={6}>
            <Example />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
