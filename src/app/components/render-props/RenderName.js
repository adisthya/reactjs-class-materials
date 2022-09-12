import { Component, Fragment } from "react";

export class RenderName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Budi'
    }
  }

  render() {
    const { name } = this.state;
    const { children } = this.props;

    return (
      <Fragment>
        { children(name) }
      </Fragment>
    );
  }
}
