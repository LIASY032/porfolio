import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

function ContactInput() {
  return (
    <Form as={Container}>
      <Form.Group className="mb-3" as={Row}>
        <Form.Control as={Col} type="textarea" placeholder="name" />

        <Form.Control as={Col} type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" as={Row}>
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
