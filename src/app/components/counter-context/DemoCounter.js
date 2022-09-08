import { Row } from "react-bootstrap";
import { CounterCard } from "./CounterCard";

export function DemoCounter() {
  const initialValues = [0, 2, 5, 7];

  return (
    <Row className="d-flex justify-content-center align-items-center">
      {
        initialValues.map((value, index) => {
          return <CounterCard key={index} index={index + 1} value={value} />
        })
      }
    </Row>
  )
}
