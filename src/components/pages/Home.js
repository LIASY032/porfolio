import React from "react";
import { Circle, Square, Triangle } from "react-bootstrap-icons";
import "./home.css";
import "./common.css";
import { Fade } from "react-reveal";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="common-container justify-content-center">
        <Triangle className="triangle position-absolute pattern-size " />

        <Square className="square position-absolute pattern-size " />

        <Circle className="circle position-absolute pattern-size " />
        <Container className="justify-content-md-center padding-top-half ">
          <Row>
            <Col>
              <Fade bottom cascade={true}>
                <div className="container">
                  <AnimateText initialDelay={0.5} wordDelay={0.5}>
                    Hi,
                  </AnimateText>
                  <AnimateText initialDelay={0.5} wordDelay={0.5}>
                    I am Shiwei Liang
                  </AnimateText>
                  <Button variant="warning" href="/contact" size="lg">
                    Contact me
                  </Button>
                </div>
              </Fade>
            </Col>
            <Col>
              <img src="logo.png" alt="L logo"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
