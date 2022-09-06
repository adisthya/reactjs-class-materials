import uniqid from 'uniqid';
import { Component } from "react";
import { GuestBook } from "./GuestBook";
import { GuestForm } from "./GuestForm";

const sampleGuest = [
  {
    id: uniqid(),
    guestName: 'Adis',
    guestPhone: '1234',
    guestEmail: 'adis@email.com',
    guestAddress: 'Jakarta'
  },
  {
    id: uniqid(),
    guestName: 'Kenji',
    guestPhone: '2345',
    guestEmail: 'kenji@email.com',
    guestAddress: 'Jakarta'
  },
];

export class Guest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      page: 'list',
      guest: null,
      guests: [ ...sampleGuest ]
    };

    this.openForm = this.openForm.bind(this);
    this.openList = this.openList.bind(this);
    this.save = this.save.bind(this);
  }

  openForm(guest) {
    this.setState({ page: 'form', guest: guest ? { ...guest } : null });
  }

  openList() {
    this.setState({ page: 'list' });
  }

  save(action, guest) {
    if (action === 'new') {
      guest.id = uniqid();
      this.setState({ guests: [ ...this.state.guests, guest ], page: 'list', guest: null });
    } else if (action === 'edit') {
      this.setState({
        guests: this.state.guests.map(g => {
          if (g.id === guest.id) {
            g = { ...guest }
          }

          return g;
        }),
        page: 'list',
        guest: null,
      });
    } else if (action === 'delete') {
      this.setState({
        guests: this.state.guests.filter(g => g.id !== guest.id),
        showDialog: false
      });
    }
  }

  render() {
    if (this.state.page === 'form') {
      return <GuestForm returnPage={this.openList} guest={this.state.guest} save={this.save} />
    } else {
      return <GuestBook guests={this.state.guests} openForm={this.openForm} deleteGuest={this.save} />
    }
  }
}
