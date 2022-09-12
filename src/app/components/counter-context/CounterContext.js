import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { CounterProvider } from "../../context/counter-context";
import { CounterCard } from "./CounterCard";

export function CounterWithContext(props) {
  return (
    <Fragment>
      <Row className="d-flex justify-content-center mx-5 my-3">
        <Col xs="12" className="d-flex justify-content-between align-items-center">
          <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">
            Counter Context
          </h2>
        </Col>
      </Row>
      <Row className="mx-5 my-3">
        <CounterProvider>
          <CounterCard />
        </CounterProvider>
      </Row>
    </Fragment>
  )
}
