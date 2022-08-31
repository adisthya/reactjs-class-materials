import { Col, Container, Row } from 'react-bootstrap';
import { BlogCard } from '../blog/BlogCard';
import { GuestBook } from '../guest-book/GuestBook';
import { Halo } from '../hello/Halo';
import { Hello } from '../hello/Hello';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <Row as="section" className="mx-5 my-3">
        <Col sm="6">
          <Hello name="Wita" />
        </Col>
        <Col sm="6">
          <Halo name="Mita" />
        </Col>
      </Row>
      <BlogCard />
      <GuestBook />
      <Footer />
    </Container>
  );
}
