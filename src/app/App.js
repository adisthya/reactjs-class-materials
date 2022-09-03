import { Container } from 'react-bootstrap';
import { GuestFn } from '../guest-book-fn/GuestFn';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <GuestFn />
      <Footer />
    </Container>
  );
}
