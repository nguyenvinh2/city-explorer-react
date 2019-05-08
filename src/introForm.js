import React, { Component } from 'react';
import { Fragment } from 'react';

export class IntroForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ url: event.target.value, geocode: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <label>
            Enter the URL to your deployed back end, making sure to remove the trailing forward slash 
          <input type="text" value={this.state.url} onChange={this.onChange} placeholder="Enter backend url"/>
          </label>
          <label>
          Enter your Geocoding API Key: 
          <input type="text" value={this.state.geocode} onChange={this.onChange} placeholder="Enter your Google API Key"/>
          </label>
        </form>
      </Fragment>
    )
  }

}