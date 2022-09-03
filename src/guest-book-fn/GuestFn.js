import { useState } from 'react';
import uniqid from 'uniqid';
import { GuestBookFn } from './GuestBookFn';
import { GuestFormFn } from './GuestFormFn';

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

export function GuestFn() {
  const [state, setState] = useState({
    showDialog: false,
    page: 'list',
    guest: null,
    guests: [ ...sampleGuest ]
  });

  const openForm = (guest) => {
    setState({
      ...state,
      page: 'form',
      guest: guest ? { ...guest } : null
    });
  }

  const openList = () => {
    setState({ ...state, page: 'list' });
  }

  const save = (action, guest) => {
    if (action === 'new') {
      guest.id = uniqid();
      setState({
        ...state,
        guests: [ ...state.guests, guest ],
        page: 'list',
        guest: null
      });
    } else if (action === 'edit') {
      setState({
        ...state,
        guests: state.guests.map(g => {
          if (g.id === guest.id) {
            g = { ...guest }
          }

          return g;
        }),
        page: 'list',
        guest: null,
      });
    } else if (action === 'delete') {
      setState({
        ...state,
        guests: state.guests.filter(g => g.id !== guest.id),
        showDialog: false
      });
    }
  }

  if (state.page === 'form') {
    return <GuestFormFn returnPage={openList} guest={state.guest} save={save} />;
  } else {
    return <GuestBookFn guests={state.guests} openForm={openForm} deleteGuest={save} />;
  }
}
