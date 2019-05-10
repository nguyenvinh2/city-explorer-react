import React, { Component } from 'react';
import { Fragment } from 'react';
import { SearchForm } from './search-form';
import { IntroForm } from './intro-form';
import { SearchResult } from './search-results';
import superagent from 'superagent';
import '../result.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geocodeBoolean: false,
      backendBoolean: false, 
      backendUrl: '',
      geocodeKey: JSON.parse(localStorage.getItem('geocode')),
    }
    
    this.onGeocodeSubmit = (event) => {
      event.preventDefault();
      this.setState({geocodeKey: event.target.geocode.value});
      this.setState({geocodeBoolean:true});
      localStorage.setItem('geocode', JSON.stringify(event.target.geocode.value));
    }
    this.onBackendSubmit = (event) => {
      event.preventDefault();
      this.setState({backendUrl: event.target.backend.value});
      this.setState({backendBoolean:true});
    }
  }

  render() {
    const showSearch = (this.state.geocodeBoolean || localStorage.getItem('geocode'))&& this.state.backendBoolean;
    let page;
    if (showSearch) {
      page = <Main geocodeKey = {this.state.geocodeKey} backendUrl = {this.state.backendUrl}/>;
    } else {
      page = <IntroForm onGeocodeSubmit = {this.onGeocodeSubmit} onBackendSubmit= {this.onBackendSubmit} backendBoolean = {this.state.backendBoolean} geocodeBoolean = {this.state.geocodeBoolean}/>;
    }
    return (
      <Fragment>
        <Header />
        {page}
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
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      geocodeKey: this.props.geocodeKey,
      backendUrl: this.props.backendUrl,
      locationUrl: null,
      result: null,
      weather: null,
      yelp: null,
      events: null,
      movies: null,
      trails: null,
    }

    this.onSearchChange = (event) => {
      this.setState({location: event.target.value});
    }
  
    this.onSearchSubmit = (event) => {
      event.preventDefault();
      this.setState({location: event.target.search.value}, () => {;
        this.getLocation();
      });
    }

    this.getLocation = () => {
      return superagent
        .get(`${this.props.backendUrl}/location`)
        .query({data:this.state.location})
        .then(res => {
          this.setState({
            result: res.body, 
            locationUrl:`https://maps.googleapis.com/maps/api/staticmap?center=${res.body.latitude}%2c%20${res.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${this.props.geocodeKey}`});
            this.backend(res, 'weather');
            this.backend(res, 'yelp');
            this.backend(res, 'events');
            this.backend(res, 'movies');
            this.backend(res, 'trails');
        });
    }

    this.backend = (res, item) => {
      return superagent
        .get(`${this.props.backendUrl}/${item}`)
        .query({ data: res.body })
        .then(res => {
          this.setState({[item]: res.body});
        })
    }
  }
  
  render() {
    return (
      <Fragment>
        <SearchForm location = {this.state.location} onSearchSubmit = {this.onSearchSubmit}/>
        <Map location = {this.state.locationUrl}/>
        <SearchResult result = {this.state.result} weather = {this.state.weather} yelp = {this.state.yelp} events = {this.state.events} movies = {this.state.movies} trails = {this.state.trails}/>
      </Fragment>
    )
  }
}

class Map extends Component {
  render() {
    return (
      <Fragment>
        <img src={this.props.location} alt="Map" />
      </Fragment>
    )
  }
}

export default App;
