import { Component, createRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
export class GuestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestName: 'Jastin Bleber'
    };
    this.guestPhoneRef = createRef();
    this.handleGuestNameChange = this.handleGuestNameChange.bind(this);
  }

  handleGuestNameChange(event) {
    this.setState({ guestName: event.target.value });
  }

  handleGuestPhoneChange() {
    console.log('guest phone:', this.guestPhoneRef.current.value);
  }

  render() {
    return (
      <Row as="section" className="d-flex justify-content-center">
        <Col sm="8">
          <Card className="mb-5 py-3">
            <Card.Header>
              <Card.Title>Form Buku Tamu</Card.Title>
            </Card.Header>
            <Card.Body>
              <input type="text" placeholder="Nama tamu" name="guestName"
                value={this.state.guestName}
                onChange={(e) => this.handleGuestNameChange(e)} />
            </Card.Body>
            <Card.Body>
              <input type="text" placeholder="No. telpon tamu"
                name="guestPhone" ref={this.guestPhoneRef} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
