import { Button } from "react-bootstrap";
import { withIncrementCounter } from "./withCounter";

function HoverCounter(props) {
  const { count, increment } = props;

  return (
    <Button variant="dark" onMouseOver={increment}>Hovered { count } times.</Button>
  )
}

export default withIncrementCounter(HoverCounter);
