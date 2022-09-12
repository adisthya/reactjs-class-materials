import { Card, Col } from "react-bootstrap";
import CounterButton from "./CounterButton";
import CounterNumber from "./CounterNumber";

export function CounterCard(props) {
  return (
    <Col xs="3" className="my-3">
      <Card>
        <Card.Header className="text-center">React Counter</Card.Header>
        <Card.Body className="text-center">
          <CounterNumber title="Hitung" />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-evenly">
          <CounterButton />
        </Card.Footer>
      </Card>
    </Col>
    );
}
