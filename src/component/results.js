import React, { Component } from 'react';
import { Fragment } from 'react';

export class Weather extends Component {
  render() {
    let age;
    let statement = [];
    if (this.props.results !== null) {
      for (let i = 0; i < this.props.results.length; i++) {
        statement.push(<li key={i}>The forecast for {this.props.results[i].time} is: {this.props.results[i].forecast}.</li>)
      }
      age = this.props.calculateAge(this.props.results[0].created_at);
    }
    return (
      <Fragment>
        <div className="result">
          <h2>Results from the Dark Sky API</h2>
          <h4>{age}</h4>
          <ul>
            {statement}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export class Yelp extends Component {
  render() {
    let age;
    let state = [];
    if (this.props.results !== null) {
      for (let i = 0; i < this.props.results.length; i++) {
        state.push(
          <li key={i}>
            <a href={this.props.results[i].url}>{this.props.results[i].name}</a>
            <p>The average rating is {this.props.results[i].rating} out of 5 and the average cost is {this.props.results[i].price} out of 4</p>
            <img src={this.props.results[i].image_url} alt="Yelp" />
          </li>
        );
      }
      age = this.props.calculateAge(this.props.results[0].created_at);
    }
    return (
      <Fragment>
        <div className="result">
          <h2>Results from the Yelp API</h2>
          <h4>{age}</h4>
          <ul>
            {state}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export class Eventbrite extends Component {
  render() {
    let age;
    let state = [];
    if (this.props.results !== null) {
      for (let i = 0; i < this.props.results.length; i++) {
        state.push(
          <li key={i}>
            <a href={this.props.results[i].link}>{this.props.results[i].name}</a>
            <p>Event Date: {this.props.results[i].event_date}</p>
            <p>{this.props.results[i].summary}</p>
          </li>
        );
      }
      age = this.props.calculateAge(this.props.results[0].created_at);
    }
    return (
      <Fragment>
        <div className="result">
          <h2>Results from the Eventbrite API</h2>
          <h4>{age}</h4>
          <ul>
            {state}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export class Movies extends Component {
  render() {
    let age;
    let state = [];
    if (this.props.results !== null) {
      for (let i = 0; i < this.props.results.length; i++) {
        state.push(
          <li key={i}>
            <p>{this.props.results[i].title} was released on {this.props.results[i].released_on}. Out of {this.props.results[i].total_votes}, {this.props.results[i].title} has an average vote of {this.props.results[i].average_votes} and a popularity score of {this.props.results[i].popularity}</p>
            <p>{this.props.results[i].summary}</p>
            <img src={this.props.results[i].image_url} alt="Movies" />
            <p>{this.props.results[i].overview}</p>
          </li>
        );
      }
      age = this.props.calculateAge(this.props.results[0].created_at);
    }
    return (
      <Fragment>
        <div className="result">
          <h2>Results from The MoviesDB API</h2>
          <h4>{age}</h4>
          <ul>
            {state}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export class Trails extends Component {
  render() {
    let age;
    let state = [];
    if (this.props.results !== null) {
      for (let i = 0; i < this.props.results.length; i++) {
        state.push(
          <li key={i}>
            <p>Hike Name: {this.props.results[i].name}, Location: {this.props.results[i].location}, Distance: {this.props.results[i].length}</p>
            <p>On {this.props.results[i].condition_date} at {this.props.results[i].condition_time}, trail conditions were reported as: {this.props.results[i].conditions}</p>
            <p>This trail has a rating of {this.props.results[i].stars} stars (out of {this.props.results[i].star_votes} votes)</p>
            <p>{this.props.results[i].summary}</p>

          </li>
        )
      }
      age = this.props.calculateAge(this.props.results[0].created_at);
    }
    return (
      <Fragment>
        <div className="result">
          <h2>Results from The MoviesDB API</h2>
          <h4>{age}</h4>
          <ul>
            {state}
          </ul>
        </div>
      </Fragment>
    )
  }
}