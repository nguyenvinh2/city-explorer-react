import React, { Component } from 'react';
import { Fragment } from 'react';

export class Weather extends Component {
  render() {
    let statement = [];
    if (this.props.results !== null) {
      for(let i = 0; i <this.props.results.length; i++)
        statement.push(<li key ={i}>The forecast for {this.props.results[i].time} is: {this.props.results[i].forecast}.</li>)
    }
    return (
      <Fragment>
        <h2>Results from the Dark Sky API</h2>
        <ul>
        {statement}
        </ul>
      </Fragment>
    )
  }
}

export class Yelp extends Component {
  render() {
    let state = [];
    if (this.props.results !== null) {
      console.log(this.props.results);
      for(let i = 0; i <this.props.results.length; i++)
        state.push(
          <li key = {i}>
            <a href={this.props.results[i].url}>{this.props.results[i].name}</a>
            <p>The average rating is {this.props.results[i].rating} out of 5 and the average cost is {this.props.results[i].price} out of 4</p>
            <img src={this.props.results[i].image_url} alt = "Yelp"/>
          </li>
          )
    }
    return (
      <Fragment>
        <h2>Results from the Yelp API</h2>
        <ul>
        {state}
        </ul>
      </Fragment>
    )
  }
}

export class Eventbrite extends Component {
  render() {
    return (
      <Fragment>
        hi
      </Fragment>
    )
  }
}

export class Movies extends Component {
  render() {
    return (
      <Fragment>
        hi
      </Fragment>
    )
  }
}

export class Trails extends Component {
  render() {
    return (
      <Fragment>
        hi
      </Fragment>
    )
  }
}