import react from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "25rem" }} variant="top" src="imgs/dark.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Watch Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
