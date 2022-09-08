import { Col, Row } from "react-bootstrap";
import ClickCounter from "../hoc/ClickCounter";
import HoverCounter from "../hoc/HoverCounter";
import { RenderCounter } from "./RenderCounter";
import { RenderName } from "./RenderName";

export function DemoRenderProps() {
  return (
    <Row className="d-flex justify-content-evenly align-items-center mb-5">
      <Col xs="12">
        <RenderName getName={(name) => (
          <h1 className="text-center">Hi, my name is { name }!</h1>)
        } />
      </Col>
      <Col xs="6" className="text-center">
        <RenderCounter render={
          (count, increment) => (
            <ClickCounter count={count} increment={increment} />
          )
        } />
      </Col>
      <Col xs="6" className="text-center">
        <RenderCounter render={
          (count, increment) => (
            <HoverCounter count={count} increment={increment} />
          )
        } />
      </Col>
    </Row>
  );
}
