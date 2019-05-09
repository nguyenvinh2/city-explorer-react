import React,  {Component} from 'react';
import {Fragment} from 'react';


export class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '' }
  }
  render() {
    return (
      <Fragment>
        <Weather/>
        <Yelp/>
        <Eventbrite/>
        <Movies/>
        <Trails/>
      </Fragment>
    )
  }
}