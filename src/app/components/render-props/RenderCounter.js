import { Component } from "react";
import { Col, Row } from "react-bootstrap";

export class RenderCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state;
    const { children } = this.props;

    return (
      <Row className="my-3">
        <Col>
          <p className="display-3">{ count }</p>
          { children(this.increment, this.decrement) }
        </Col>
      </Row>
    );
  }
}
