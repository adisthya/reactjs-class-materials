import { Button } from "react-bootstrap";
import { withIncrementCounter } from "./withCounter";

function ClickCounter(props) {
  const { count, increment } = props;

  return (
    <Button variant="dark" onClick={increment}>Clicked { count } times.</Button>
  )
}

export default withIncrementCounter(ClickCounter);
