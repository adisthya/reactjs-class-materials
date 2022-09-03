import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export function GuestFormFn(props) {
  const [ state, setState ] = useState({
    action: 'new',
    value: {
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      guestAddress: ''
    }
  });

  const handleValueChange = (field, event) => {
    const { target: { value } } = event;
    const fields = Object.keys(state.value);

    if (fields.includes(field)) {
      setState({
        ...state,
        value: { ...state.value, [field]: value }
      });
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.save(state.action, state.value);
  }

  const { value } = state;
  const { returnPage } = props;

  useEffect(() => {
      console.log('use effect fill guest form');
      if (props.guest) {
        setState({ action: 'edit', value: { ...props.guest } });
      }
  }, [props.guest]);

  return (
    <Row as="section" className="d-flex justify-content-center">
      <Col sm="8">
        <Card className="mb-5">
          <Card.Header>
            <Card.Title>Form Buku Tamu</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Nama Tamu" value={value.guestName}
                  onChange={(e) => handleValueChange('guestName', e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Email Tamu" value={value.guestEmail}
                  onChange={(e) => handleValueChange('guestEmail', e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Telpon Tamu" value={value.guestPhone}
                  onChange={(e) => handleValueChange('guestPhone', e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Alamat Tamu" as="textarea" value={value.guestAddress}
                  onChange={(e) => handleValueChange('guestAddress', e)} />
              </Form.Group>
              <Form.Group className="d-flex justify-content-end">
                <Button variant="dark" type="submit" className="me-2">Simpan</Button>
                <Button variant="light" type="reset" onClick={returnPage}>Reset</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
