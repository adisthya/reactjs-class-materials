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
    const { render } = this.props;

    return (
      <Fragment>
        { render(this.state.count, this.increment) }
      </Fragment>
    )
  }
}
