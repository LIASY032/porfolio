import React from "react";
import "./common.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="common-container">
      <div className="flex-container">
        <div>
          <h1>About me</h1>
          <p>Hi Guys,</p>
          <p>
            I am Shiwei Liang coming from China. Now I am studying in University
            of South Australia.
          </p>
        </div>
        <div>this is animation part.</div>
      </div>

      {/* <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>About me</h1>
            <p>Hi Guys,</p>
            <p>
              I am Shiwei Liang coming from China. Now I am studying in
              University of South Australia.
            </p>
          </Col>
          <Col>
            <div>this is animation part.</div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default About;
