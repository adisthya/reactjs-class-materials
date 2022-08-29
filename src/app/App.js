import { Container, Row, Col } from 'react-bootstrap';
import { Halo } from '../hello/Halo';
import { Hello } from '../hello/Hello';

export function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Hello />
        </Col>
        <Col>
          <Halo />
        </Col>
      </Row>
    </Container>
  );
}
