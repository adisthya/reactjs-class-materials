import { Component, createRef } from "react";
import { Card, Col, Row } from "react-bootstrap";

export class GuestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guestName: 'Jastin Bleber'
    };
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
              <input type="text" placeholder="Nama tamu" name="guestName" />
            </Card.Body>
            <Card.Body>
              <input type="text" placeholder="No. telpon tamu" name="guestPhone" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
