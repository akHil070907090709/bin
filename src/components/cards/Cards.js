import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CardsSection.scss";
function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=693&q=80"
      />
      <Card.Body>
        <Card.Title>Course Name</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          ab necessitatibus facilis reprehenderit tempore reiciendis praesentium
          nobis provident doloremque. Quos voluptatum iure minima est rerum
          totam mollitia sed magni necessitatibus?
        </Card.Text>
        <Button variant="primary">view course</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
