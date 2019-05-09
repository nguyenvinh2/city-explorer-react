import React, { Component } from 'react';
import { Fragment } from 'react';

export class SearchForm extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={event => this.props.onSearchSubmit(event)}>
          <label>
            Search for a location
          <input type="text" placeholder="Enter a location here" onChange = {event =>  this.props.onSearchChange(event)}/>
          </label>
          <button>Explore!</button>
        </form>
      </Fragment>
    )
  }
}