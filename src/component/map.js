import React, { Component } from 'react';
import { Fragment } from 'react';

export class Map extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.location} alt="Map" />
      </Fragment>
    )
  }
}
