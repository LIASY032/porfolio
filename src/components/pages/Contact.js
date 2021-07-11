import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import ContactInput from "../ContactInput";
import MyMap from "../MyMap";
function Contact() {
  return (
    <Container className="common-container ">
      <Row>
        <Col>
          <Container>
            <Row>
              <Fade bottom cascade={true}>
                <div className="text-container">
                  <span>C</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>a</span>
                  <span>c</span>
                  <span>t </span>

                  <span>m</span>
                  <span>e</span>
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
  );
}

export default Contact;
