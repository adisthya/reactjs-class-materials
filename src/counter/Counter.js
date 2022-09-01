import { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

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

  render() {
    return (
      <Row as="section" className="d-flex justify-content-center mx-5 my-5">
        <Col sm="2">
          <Card>
            <Card.Body>
              <Card.Text className="fs-3 text-center">{ this.state.counter }</Card.Text>
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
