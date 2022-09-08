import { Component, Fragment } from "react";

export class RenderCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        { children(this.state.count, this.increment) }
      </Fragment>
    )
  }
}
