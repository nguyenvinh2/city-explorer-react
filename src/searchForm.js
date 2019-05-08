import React, { Component } from 'react';
import { Fragment } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <label>
            Location:
          <input type="text" value={this.state.value} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )
  }
}