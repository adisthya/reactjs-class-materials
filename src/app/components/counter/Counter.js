import { Component } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { CounterButton } from "./CounterButton";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [0,0,0,0]
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(index) {
    const counters = this.state.counters;
    counters[index] = counters[index] + 1;

    this.setState({ counters });
  }

  decrement(index) {
    const counters = this.state.counters;
    counters[index] = counters[index] - 1;
    this.setState({ counters });
  }

  displayColoredNumber(count) {
    if (count < 4) {
      return <Badge pill bg="danger" text="light" className="px-3 fs-4">{ count }</Badge>
    } else if (count >= 4 && count < 7) {
      return <Badge pill bg="warning" text="dark" className="px-3 fs-3">{ count }</Badge>
    } else if (count >= 7 && count <= 10) {
      return <Badge pill bg="success" className="px-3 fs-2">{ count }</Badge>
    }
  }

  render() {
    return (
      <Row className="d-flex justify-content-center">
        {
          this.state.counters.map((count, index) => {
            return (
              <Col xs="3" className="my-3" key={index}>
                <Card>
                  <Card.Header className="text-center">
                    React Counter
                  </Card.Header>
                  <Card.Body className="text-center">
                    { this.displayColoredNumber(count) }
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-evenly">
                    <CounterButton label="+" action={() => this.increment(index) }
                                  disabled={ count >= 10 } />
                    <CounterButton label="-" action={() => this.decrement(index) }
                                  disabled={ count <= 0 } />
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}
