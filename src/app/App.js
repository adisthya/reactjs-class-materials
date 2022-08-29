import { Container } from 'react-bootstrap';
import { BlogCard } from '../blog/BlogCard';
import { GuestBook } from '../guest-book/GuestBook';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

export function App() {
  return (
    <Container fluid>
      <Header />
      <BlogCard />
      <GuestBook />
      <Footer />
    </Container>
  );
}
