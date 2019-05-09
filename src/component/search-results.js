import React,  {Component} from 'react';
import { Fragment } from 'react';
import { Weather}  from './results';
import { Yelp}  from './results';
import { Eventbrite}  from './results';
import { Movies}  from './results';
import { Trails}  from './results';


export class SearchResult extends Component {
  render() {
    let header;
    if (this.props.result !== null) {
      header = <h2>Here are the results for {this.props.result.formatted_query}</h2>
    }
    return (
      <Fragment>
        {header}
        <Weather results = {this.props.weather}/>
        <Yelp results = {this.props.yelp}/>
        <Eventbrite results = {this.props.eventbrite}/>
        <Movies results = {this.props.movies}/>
        <Trails results = {this.props.trails}/>
      </Fragment>
    )
  }
}