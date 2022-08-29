import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Halo } from '../hello/Halo';
import { Hello } from '../hello/Hello';

export function App() {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          <Hello />
        </Col>
        <Col>
          <Halo />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
