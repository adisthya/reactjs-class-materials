import { Col, Container, Navbar, Row } from "react-bootstrap";

export function Header() {
  return (
    <Row as="header">
      <Col className="p-0 mb-2">
        <Navbar bg="dark" variant="dark" expand="sm" className="shadow-lg border-bottom border-3 border-danger">
          <Container fluid>
            <Navbar.Brand href="#">My Blog</Navbar.Brand>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}
