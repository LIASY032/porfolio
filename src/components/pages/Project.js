import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Item from "../Item";
import Title from "../Title";

function Project() {
  return (
    <div className="common-container">
      <Container className="text-center">
        <Row>
          <Title>Projects</Title>
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
