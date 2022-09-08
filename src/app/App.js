import { Container } from 'react-bootstrap';
import { DemoCounter } from './components/counter-context/DemoCounter';
import { DemoHoc } from './components/hoc/DemoHoc';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { DemoRenderProps } from './components/render-props/DemoRenderProps';
import { CounterProvider } from './contexts/counter.context';

export function App() {
  return (
    <Container fluid>
      <Header />
      <DemoHoc />
      <DemoRenderProps />
      <CounterProvider>
        <DemoCounter />
      </CounterProvider>
      <Footer />
    </Container>
  );
}
