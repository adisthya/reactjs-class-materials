import { Component } from "react";

export function withCounter( WrappedComponent ) {

  class WithCounter extends Component {
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
      console.log('Props in HOC:', this.props);
      return <WrappedComponent count={this.state.count} increment={this.increment} { ...this.props } />
    }
  }

  return WithCounter;
}
