import { Button } from "react-bootstrap";
import { withCounter } from "./withCounter";

function HoverCounter(props) {
  const { count, increment, name } = props;

  return (
    <Button variant="dark" onMouseOver={increment}>{ name || 'You' } hovered { count } times.</Button>
  )
}

export default withCounter(HoverCounter, 4);
