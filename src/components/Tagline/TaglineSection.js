import React from "react";
import "./TaglineSection.scss";
import { Col, Container, Row } from "react-bootstrap";

function TaglineSection() {
  return (
    <div className="tagline-section">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} lg={4} xl={4}>
            <img src="https://i.postimg.cc/RZ3B5Bhq/steps.png" alt="bin logo" />
          </Col>
          <Col sm={12} lg={8} xl={8}>
            <h3>Welcome to cyber security</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto ab necessitatibus facilis reprehenderit tempore
              reiciendis praesentium nobis provident doloremque. Quos voluptatum
              iure minima est rerum totam mollitia sed magni necessitatibus?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TaglineSection;
