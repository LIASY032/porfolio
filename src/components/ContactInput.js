import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

function ContactInput() {
  return (
    <Form as={Container}>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Control type="textarea" placeholder="name" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="email" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Subject" className="mb-3" />
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          className="mb-3"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactInput;
