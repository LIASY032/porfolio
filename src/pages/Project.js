import React from "react";
import { Row } from "react-bootstrap";

import Title from "../components/Title";
import Gallery from "../components/Gallery";
function Project() {
  return (
    <div className="common-container">
      <Row>
        <Title>Projects</Title>
      </Row>
      <Row>
        <Gallery />
      </Row>
    </div>
  );
}

export default Project;
