import { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
export class GuestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'new',
      value: {
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        guestAddress: ''
      }
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleValueChange(field, event) {
    const { target: { value } } = event;
    const fields = Object.keys(this.state.value);

    if (fields.includes(field)) {
      this.setState({
        value: { ...this.state.value, [field]: value }
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.save(this.state.action, this.state.value);
  }

  fillGuestForm() {
    const { guest } = this.props;

    if (guest) {
      this.setState({ action: 'edit', value: { ...guest } });
    }
  }

  componentDidMount() {
    this.fillGuestForm();
  }

  render() {
    const { value } = this.state;
    const { returnPage } = this.props;


    return (
      <Row as="section" className="d-flex justify-content-center">
        <Col sm="8">
          <Card className="mb-5">
            <Card.Header>
              <Card.Title>Form Buku Tamu</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Nama Tamu" value={value.guestName}
                    onChange={(e) => this.handleValueChange('guestName', e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Email Tamu" value={value.guestEmail}
                    onChange={(e) => this.handleValueChange('guestEmail', e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Telpon Tamu" value={value.guestPhone}
                    onChange={(e) => this.handleValueChange('guestPhone', e)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Alamat Tamu" as="textarea" value={value.guestAddress}
                    onChange={(e) => this.handleValueChange('guestAddress', e)} />
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
}
