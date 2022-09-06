import { Container } from 'react-bootstrap';
import { GuestFn } from './components/guest-book-fn/GuestFn';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <GuestFn />
      <Footer />
    </Container>
  );
}
