import { Col, Row, Table } from "react-bootstrap";

const guests = [
  {
    id: 1,
    name: 'Adis',
    phone: '1234',
    email: 'adis@email.com',
    address: 'Jakarta'
  },
  {
    id: 2,
    name: 'Juan',
    phone: '2345',
    email: 'juan@email.com',
    address: 'Jakarta'
  },
  {
    id: 3,
    name: 'Eldi',
    phone: '5678',
    email: 'eldi@email.com',
    address: 'Jakarta'
  },
  {
    id: 4,
    name: 'Vergi',
    phone: '9876',
    email: 'vergi@email.com',
    address: 'Jakarta'
  },
  {
    id: 5,
    name: 'Rizki',
    phone: '5432',
    email: 'rizki@email.com',
    address: 'Jakarta'
  },
  {
    id: 6,
    name: 'Tika',
    phone: '2101',
    email: 'tika@email.com',
    address: 'Jakarta'
  },
  {
    id: 7,
    name: 'Wita',
    phone: '2345',
    email: 'wita@email.com',
    address: 'Jakarta'
  },
  {
    id: 1,
    name: 'Kenji',
    phone: '6789',
    email: 'kenji@email.com',
    address: 'Jakarta'
  },
  {
    id: 8,
    name: 'Riri',
    phone: '8765',
    email: 'riri@email.com',
    address: 'Jakarta'
  },
  {
    id: 9,
    name: 'Sirojul',
    phone: '4321',
    email: 'sirojul@email.com',
    address: 'Jakarta'
  },
  {
    id: 10,
    name: 'Mita',
    phone: '2345',
    email: 'sirojul@email.com',
    address: 'Jakarta'
  }
];

export function GuestBook() {
  return (
    <Row as="section" className="mx-5 my-3">
      <Col xs="12">
        <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">Guests</h2>
      </Col>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-bg-dark">
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { guests.map((guest) => {
            const key = `guest-${guest.id}`;
            return (
              <tr key={key}>
                <td>{ guest.id }</td>
                <td>{ guest.name }</td>
                <td>{ guest.phone }</td>
                <td>{ guest.email }</td>
              </tr>
            );
          }) }
        </tbody>
      </Table>
    </Row>
  );
}
