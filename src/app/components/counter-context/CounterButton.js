import { Button } from "react-bootstrap";
import { withConsumer } from "../../context/counter-context";

function CounterButton(props) {
  const { increment, decrement } = props;

  return (
    <>
    <Button variant="dark" size="small"
      onClick={increment}>+</Button>
    <Button variant="dark" size="small"
      onClick={decrement}>-</Button>
    </>
  );
}

function mapToProps(contextValue) {
  return {
    increment: contextValue.increment,
    decrement: contextValue.decrement
  }
}

export default withConsumer(mapToProps)(CounterButton);
