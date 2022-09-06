import { Col, Row } from "react-bootstrap";

export function Footer() {
  const year = (new Date()).getFullYear();
  return (
    <Row as="footer">
      <Col xs="12" className="text-center p-0 py-3 text-bg-dark">
        <span className="text-white">
          &copy;{ year } <a className="text-white text-decoration-none" href="https://enigmacamp.com">
            Enigma Camp
          </a>
        </span>
      </Col>
    </Row>
  )
}
