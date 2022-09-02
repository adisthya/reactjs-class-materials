import { Component, Fragment } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";

export class GuestBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      guest: null
    };

    this.openDialog = this.openDialog.bind(this);
    this.confirmDeleteGuest = this.confirmDeleteGuest.bind(this);
    this.clearDialog = this.clearDialog.bind(this);
  }

  openDialog(guest) {
    this.setState({ showDialog: true, guest: { ...guest } });
  }

  confirmDeleteGuest() {
    const guest = { ...this.state.guest };

    this.clearDialog();
    this.props.deleteGuest('delete', guest);
  }

  clearDialog() {
    this.setState({ showDialog: false, guest: null });
  }

  render() {
    const { showDialog: show, guest } = this.state;
    const { openForm, guests } = this.props;

    return (
      <Fragment>
        <Modal show={show} onHide={this.clearDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Hapus</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda yakin mau menghapus data { guest?.guestName }</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.confirmDeleteGuest}>
              Hapus
            </Button>
            <Button variant="light" onClick={this.clearDialog}>
              Batal
            </Button>
          </Modal.Footer>
        </Modal>

        <Row as="section" className="mx-5 my-3">
          <Col xs="4">
            <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">Guests</h2>
          </Col>
          <Col xs="8" className="d-flex justify-content-end pb-2">
            <Button variant="dark" size="small" className="align-self-end" onClick={() => openForm()}>Tambah Tamu</Button>
          </Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-bg-dark">
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { guests.map((guest, index) => {
                  const key = `guest-${index + 1}`;
                  return (
                    <tr key={key}>
                      <td>{ index + 1 }</td>
                      <td>{ guest.guestName }</td>
                      <td>{ guest.guestPhone }</td>
                      <td>{ guest.guestEmail }</td>
                      <td>{ guest.guestAddress }</td>
                      <td className="text-nowrap">
                        <Button variant="warning" size="small" className="me-2" onClick={() => openForm(guest)}>Ubah</Button>
                        <Button variant="danger" size="small" onClick={() => this.openDialog(guest)}>Hapus</Button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </Row>
      </Fragment>
    );
  }
}
