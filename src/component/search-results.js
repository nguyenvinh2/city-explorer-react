import React,  {Component} from 'react';
import { Fragment } from 'react';
import { Weather}  from './results';
import { Yelp}  from './results';
import { Eventbrite}  from './results';
import { Movies}  from './results';
import { Trails}  from './results';


export class SearchResult extends Component {
  constructor(props) {
    super(props);
    //this is stolen from the orignal city-explorer frontend
    this.calculateAge = (created_at) => {
      if (!created_at) return 'TBD';
      let age = Date.now() - created_at;
      if (age > 86400000) {
        return `Updated : ${Math.floor(age / (86400000))} days ago`;
      }
      if (age > 3600000) {
        return `Updated : ${Math.floor(age / (3600000))} hours ago`;
      }
      if (age > 60000) {
        return `Updated : ${Math.floor(age / (60000))} minutes ago`;
      }
      if (age > 1000) {
        return `Updated : ${Math.floor(age / (1000))} seconds ago`;
      }
      return 'Just updated';
    }
  }
  render() {
    let header;
    if (this.props.result !== null) {
      header = <h2>Here are the results for {this.props.result.formatted_query}</h2>
    }
    return (
      <Fragment>
        {header}
        <Weather results = {this.props.weather} calculateAge = {this.calculateAge}/>
        <Yelp results = {this.props.yelp} calculateAge = {this.calculateAge}/>
        <Eventbrite results = {this.props.events} calculateAge = {this.calculateAge}/>
        <Movies results = {this.props.movies} calculateAge = {this.calculateAge}/>
        <Trails results = {this.props.trails} calculateAge = {this.calculateAge}/>
      </Fragment>
    )
  }
}