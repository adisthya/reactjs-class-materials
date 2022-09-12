import { Badge } from "react-bootstrap";
import { withConsumer } from "../../context/counter-context";

export function CounterNumber(props) {
  const { count, title } = props;

  if (count < 4) {
    return <Badge pill bg="danger" text="light" className="px-3 fs-4">{ title } { count }</Badge>
  } else if (count >= 4 && count < 7) {
    return <Badge pill bg="warning" text="dark" className="px-3 fs-3">{ title } { count }</Badge>
  } else {
    return <Badge pill bg="success" className="px-3 fs-2">{ title } { count }</Badge>
  }
}

function mapToProps(contextValue) {
  console.log('mapper function context:', contextValue);
  return {
    count: contextValue.counter,
    title: contextValue.title,
  }
}

export default withConsumer(mapToProps)(CounterNumber);
