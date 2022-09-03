import { Fragment, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";

export function GuestBookFn(props) {
  const [state, setState] = useState({
    showDialog: false,
    guest: null
  });

  const clearDialog = () => {
    setState({ ...state, showDialog: false, guest: null });
  }

  const openDialog = (guest) => {
    setState({ ...state, showDialog: true, guest: { ...guest } });
  }

  const confirmDeleteGuest = () => {
    const guest = { ...state.guest };

    clearDialog();
    props.deleteGuest('delete', guest);
  }

  const { showDialog: show, guest } = state;
  const { openForm, guests } = props;

  return (
    <Fragment>
    <Modal show={show} onHide={clearDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Konfirmasi Hapus</Modal.Title>
      </Modal.Header>
      <Modal.Body>Apakah Anda yakin mau menghapus data { guest?.guestName }</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={confirmDeleteGuest}>
          Hapus
        </Button>
        <Button variant="light" onClick={clearDialog}>
          Batal
        </Button>
      </Modal.Footer>
    </Modal>

    <Row as="section" className="mx-5 my-3">
      <Col xs="4">
        <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">Guests (Function)</h2>
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
                    <Button variant="danger" size="small" onClick={() => openDialog(guest)}>Hapus</Button>
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
