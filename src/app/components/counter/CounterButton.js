import { Button } from "react-bootstrap";

export function CounterButton(props) {
  const { label, action, disabled } = props;

  return (
    <Button variant="dark" size="small" disabled={disabled} onClick={() => action()}>{ label }</Button>
  );
}
