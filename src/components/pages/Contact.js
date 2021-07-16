import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import ContactInput from "../ContactInput";
import MyMap from "../MyMap";
import AnimateText from "@moxy/react-animate-text";
import "@moxy/react-animate-text/dist/index.css";

function Contact() {
  return (
    <div className="common-container ">
      {" "}
      <Container>
        <Row>
          <Col>
            <Container>
              <Row>
                <Fade bottom cascade={true}>
                  <div className="container">
                    <AnimateText initialDelay={0.5} wordDelay={0.5}>
                      Contact me
                    </AnimateText>
                  </div>
                </Fade>
              </Row>
              <Row className="justify-content-md-center ">
                <p>I am interested in frontend or backend opportunities</p>
                <p>
                  If you want to contact me for jobs, please write the "job" in
                  "Subject"
                </p>
              </Row>
            </Container>

            <ContactInput></ContactInput>
          </Col>
          <Col>
            <MyMap></MyMap>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
