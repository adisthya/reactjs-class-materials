// import { createStore } from "redux";

const Redux = require('redux');

const initialState = {
  count: 0
};

const CounterAction = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function counterReducer(state = initialState, action) {
  console.log('dispatch', action.type);

  switch (action.type) {
    case CounterAction.INCREMENT :
      return { count: state.count + 1 }
    case CounterAction.DECREMENT :
      return { count: state.count - 1 }
    default:
      return { ...state };
  }
}

const store = Redux.createStore(counterReducer);

console.log('=====');
console.log('initial state:', store.getState());
const unsubscribe = store.subscribe(() => console.log('state after dispatch:', store.getState()));

store.dispatch({ type: CounterAction.INCREMENT });
store.dispatch({ type: CounterAction.INCREMENT });
store.dispatch({ type: CounterAction.INCREMENT });
store.dispatch({ type: CounterAction.INCREMENT });

store.dispatch({ type: CounterAction.DECREMENT });

unsubscribe();
