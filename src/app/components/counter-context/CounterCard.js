import { Badge, Button, Card, Col } from "react-bootstrap";
import { CounterContext } from "../../contexts/counter.context";

export function CounterCard(props) {
  const { index, value } = props;

  const displayColoredNumber = (count) => {

    if (count < 4) {
      return <Badge pill bg="danger" text="light" className="px-3 fs-4">{ count }</Badge>
    } else if (count >= 4 && count < 7) {
      return <Badge pill bg="warning" text="dark" className="px-3 fs-3">{ count }</Badge>
    } else if (count >= 7 && count <= 10) {
      return <Badge pill bg="success" className="px-3 fs-2">{ count }</Badge>
    }
  }

  return (
    <CounterContext.Consumer>
      {
        ({ counters, increment, decrement, setCounter }) => {
          return (
            <Col xs="3" className="my-3">
              <Card>
                {
                  counters[index] >= 0 ? (
                    <>
                      <Card.Header className="text-center">React Counter {index}</Card.Header>
                      <Card.Body className="text-center">
                        { displayColoredNumber(counters[index]) }
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-evenly">
                        <Button variant="dark" size="small" disabled={ counters[index] >= 10 } onClick={() => increment(index)}>+</Button>
                        <Button variant="dark" size="small" disabled={ counters[index] <= 0 } onClick={() => decrement(index)}>-</Button>
                      </Card.Footer>
                    </>
                  ) :
                  (
                    <Card.Body className="d-flex justify-content-center">
                      <Button onClick={() => setCounter(index, value)}>
                        Set Counter Value {value}
                      </Button>
                    </Card.Body>
                  )
                }
              </Card>
            </Col>
          )
        }
      }
    </CounterContext.Consumer>
  )
}
