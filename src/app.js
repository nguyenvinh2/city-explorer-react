import React, { Component } from 'react';
import { Fragment } from 'react';
import { SearchForm } from './searchForm';
import { IntroForm } from './introForm';
import './result.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <IntroForm />
      </Fragment>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
      </Fragment>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Map />
        <Result />
      </Fragment>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <Fragment>
        <SearchForm />
      </Fragment>
    )
  }
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { key: '', url: `placeholder url` };
  }
  render() {
    return (
      <Fragment>
        <img src={this.state.url} alt="Map" />
      </Fragment>
    )
  }
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { location: '' }
  }
  render() {
    return (
      <Fragment>
        <h1>Here are the results for {this.state.location}</h1>
        <section className="results">
          <div className="weather">
            <h2>Results from the Dark Sky API</h2>
            <p>TBD</p>
          </div>
          <div className="events">
            <h2>Results from the Yelp API</h2>
            <p>TBD</p>
          </div>
          <div className="eventbrite">
            <h2>Results from the Eventbrite API</h2>
            <p>TBD</p>
          </div>
          <div className="movies">
            <h2>Results from The Movie DB API</h2>
            <p>TBD</p>
          </div>
          <div className="trails">
            <h2>Results from the Hiking Project API</h2>
            <p>TBD</p>
          </div>
        </section>
      </Fragment>
    )
  }
}



export default App;
