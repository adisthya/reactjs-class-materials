import { Button } from "react-bootstrap";
import { withCounter } from "./withCounter";

function ClickCounter(props) {
  const { count, increment, name } = props;

  console.log('Props in ClickCounter:', props);
  return (
    <Button variant="dark" onClick={increment}>{ name || 'You' } clicked { count } times.</Button>
  )
}

export default withCounter(ClickCounter);
