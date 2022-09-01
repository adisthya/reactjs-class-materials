import { Container } from 'react-bootstrap';
import { Counter } from '../counter/Counter';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <Counter />
      <Footer />
    </Container>
  );
}
