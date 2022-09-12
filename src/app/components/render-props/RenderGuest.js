import { Component } from "react";

export class RenderGuest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: [
        {
          id: 1,
          name: 'Adis',
          phone: '123',
          email: 'adis@email.com',
          address: 'Jakarta'
        },
        {
          id: 2,
          name: 'Juan',
          phone: '123',
          email: 'juan@email.com',
          address: 'Jakarta'
        }
      ]
    }
  }

  render() {
    const { guests } = this.state;
    const { children } = this.props;
    return (
      <ul>
        { children(guests) }
      </ul>
    )
  }
}
