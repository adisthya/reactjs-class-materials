import { Col, Container, Navbar, Row } from "react-bootstrap";

export function Header() {
  return (
    <Row as="header" className="border-bottom border-3 border-danger mb-5 shadow-lg">
      <Col xs="12" className="p-0">
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1>My Blog</h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Col>
    </Row>
  )
}
