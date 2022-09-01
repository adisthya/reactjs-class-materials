import { Component } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log('counter + 1');
    console.log('state:', this.state);

    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    console.log('counter - 1');
    console.log('state:', this.state);

    this.setState({ counter: this.state.counter - 1 });
  }

  renderColoredNumber() {
    const { counter } = this.state;

    if (counter < 4) {
      return <Badge pill bg="light" text="dark" className="px-3 fs-4">{ counter }</Badge>
    } else if (counter >= 4 && counter < 7) {
      return <Badge pill bg="warning" text="dark" className="px-3 fs-3">{ counter }</Badge>
    } else if (counter >= 7 && counter <= 10) {
      return <Badge pill bg="success" className="px-3 fs-2">{ counter }</Badge>
    } else if (counter > 10) {
      return <Badge pill bg="danger" className="px-3 fs-1">{ counter }</Badge>
    }
  }

  render() {
    return (
      <Row as="section" className="d-flex justify-content-center mx-5 my-5">
        <Col sm="2">
          <Card>
            <Card.Body>
              <Card.Text className="fs-3 text-center">{ this.renderColoredNumber() }</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <Button variant="primary" size="sm" onClick={ this.increment }
                  className="text-bold fs-5 px-5">+</Button>
                <Button variant="primary" size="sm" onClick={ this.decrement }
                  className="text-bold fs-5 ms-1 px-5">-</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}
