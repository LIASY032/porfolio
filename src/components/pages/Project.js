import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./common.css";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";
import Item from "../Item";

function Project() {
  return (
    <div className="common-container">
      <Container className="text-center">
        <Row>
          <Fade bottom cascade={true}>
            <div className="container ">
              <AnimateText>Projects</AnimateText>
            </div>
          </Fade>
        </Row>
        <Row>
          <Col>
            <Item />
          </Col>
          <Col>
            <Item />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
