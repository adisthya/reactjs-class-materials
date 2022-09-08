import { Container } from 'react-bootstrap';
import { DemoHoc } from './components/hoc/DemoHoc';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <DemoHoc />
      <Footer />
    </Container>
  );
}
