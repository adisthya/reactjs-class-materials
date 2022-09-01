import { Component } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counters: [0, 0, 0, 0, 0] };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.renderColoredNumber = this.renderColoredNumber.bind(this);
    this.renderCounterCard = this.renderCounterCard.bind(this);
  }

  increment(index) {
    console.log('counter + 1');
    console.log('state:', this.state);

    this.setState({
      counters: this.state.counters.map((counter, i) => {
        if (index === i) {
          return counter + 1;
        } else {
          return counter;
        }
      })
    });
  }

  decrement(index) {
    console.log('counter - 1');
    console.log('state:', this.state);

    this.setState({
      counters: this.state.counters.map((counter, i) => {
        if (index === i) {
          return counter - 1;
        } else {
          return counter;
        }
      })
    });
  }

  renderColoredNumber(index) {
    const { counters } = this.state;
    const counter = counters[index];

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

  renderCounterCard(index) {
    return (
      <Col sm="2" key={index}>
        <Card>
          <Card.Body>
            <Card.Text className="fs-3 text-center">{ this.renderColoredNumber(index) }</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-around">
              <Button variant="primary" size="sm" onClick={ () => this.increment(index) }
                className="text-bold fs-5 px-5">+</Button>
              <Button variant="primary" size="sm" onClick={ () => this.decrement(index) }
                className="text-bold fs-5 ms-1 px-5">-</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }

  render() {
    const { counters } = this.state;

    return (
      <Row as="section" className="d-flex justify-content-center mx-5 my-5">
        {
          counters.map((counter, index) => {
            return this.renderCounterCard(index);
          })
        }
      </Row>
    );
  }
}
