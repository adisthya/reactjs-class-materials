import { Col, Row } from "react-bootstrap";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export function DemoHoc() {
  return (
    <Row className="d-flex justify-content-evenly align-items-center mb-5">
      <Col className="text-center">
        <ClickCounter />
      </Col>
      <Col className="text-center">
        <HoverCounter />
      </Col>
    </Row>
  )
}
