import React from "react";
import "./common.css";
import { Fade } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import ContactInput from "../ContactInput";
function Contact() {
  return (
    <Container className="common-container padding-top-half">
      <Row>
        <Col>
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
          <p>I am interested in frontend or backend opportunities</p>
          <p>
            If you want to contact me for jobs, please write the "job" in
            "Subject"
          </p>
          <ContactInput></ContactInput>
        </Col>
        <Col>Show the map</Col>
      </Row>
    </Container>
  );
}

export default Contact;
