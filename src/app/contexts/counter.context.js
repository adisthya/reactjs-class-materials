import { Component, createContext } from "react";

export const CounterContext = createContext();

export class CounterProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.setCounter = this.setCounter.bind(this);
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

  setCounter(index, initialValue) {
    const counters = this.state.counters;

    if (!counters[index]) {
      counters[index] = initialValue;
    }

    this.setState({ counters });
  }

  render() {
    const { children } = this.props;
    const { counters } = this.state;
    const value = {
      counters,
      increment: this.increment,
      decrement: this.decrement,
      setCounter: this.setCounter,
    };

    return (
      <CounterContext.Provider value={value}>
        { children }
      </CounterContext.Provider>
    )
  }
}
