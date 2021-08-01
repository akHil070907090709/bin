import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import "./CardsSection.scss";
function CardsSection() {
  return (
    <div className="cards-section">
      <h2>Courses</h2>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={4} xl={4}>
            <Cards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardsSection;
