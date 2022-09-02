import { Container } from 'react-bootstrap';
import { Guest } from '../guest-book/Guest';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <Guest />
      <Footer />
    </Container>
  );
}
