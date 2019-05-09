import React, { Component } from 'react';
import { Fragment } from 'react';

export class IntroForm extends Component {
  render() {
    let backendForm;
    let geocodeForm;

    if(!this.props.backendBoolean) {
      backendForm =
      <form onSubmit={event => this.props.onBackendSubmit(event)}>
        <label>
          Enter the URL to your deployed back end, making sure to remove the trailing forward slash
        <input type="text"  onChange = {event => this.props.onChangeBackend(event)} placeholder="Enter backend url" />
        </label>
      </form>
    } else {
      backendForm = "";
    }

    if(!this.props.geocodeBoolean) {
      geocodeForm = 
      <form onSubmit={event => this.props.onGeocodeSubmit(event)} >
        <label>
          Enter your Geocoding API Key:
        <input type="text" onChange = {event => this.props.onChangeGeocode(event)} placeholder="Enter your Google API Key" />
        </label>
      </form>
    } else {
      geocodeForm = "";
    }
    return (
      <Fragment>
        {backendForm}
        {geocodeForm}
      </Fragment>
    )
  }

}