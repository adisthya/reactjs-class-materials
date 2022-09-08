import { Component, Fragment } from "react";

export class RenderName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Thor'
    }
  }

  render() {
    const { name } = this.state;
    const { getName } = this.props;

    return (
      <Fragment>
        { getName(name) }
      </Fragment>
    );
  }
}
