import { Component } from "react";

export function withIncrementCounter( OriginalComponent ) {

  class Counter extends Component {
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
      return <OriginalComponent count={this.state.count} increment={this.increment} />
    }
  }

  return Counter;
}
