import { Col, Row } from "react-bootstrap";
import { RenderName } from "./RenderName";

export function DemoRenderProps() {
  return (
    <Row className="d-flex justify-content-evenly align-items-center mb-5">
      <Col xs="6">
        <RenderName getName={(name) => <h1 className="text-center">Hi, your name is { name }!</h1>} />
      </Col>
    </Row>
  );
}
