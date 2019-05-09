import React, { Component } from 'react';
import { Fragment } from 'react';
import { SearchForm } from './search-form';
import { IntroForm } from './intro-form';
import superagent from 'superagent';
import '../result.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geocodeBoolean: false,
      backendBoolean: false, 
      backendUrl: '',
      geocodeKey: '',
    }
    
    this.onGeocodeSubmit = (event) => {
      console.log(this.state.geocodeKey);
      this.setState({geocodeBoolean:true});
      event.preventDefault();
    }
    this.onBackendSubmit = (event) => {
      console.log(this.state.backendUrl);
      this.setState({backendBoolean:true});
      event.preventDefault();
    }
    
    this.onChangeBackend = (event) => {
      this.setState({backendUrl: event.target.value});
    }

    this.onChangeGeocode = (event) => {
      this.setState({geocodeKey: event.target.value});
    }

  }

  render() {
    const showSearch = this.state.geocodeBoolean && this.state.backendBoolean;
    let page;
    if (showSearch) {
      page = <Main geocodeKey = {this.state.geocodeKey} backendUrl = {this.state.backendUrl}/>;
    } else {
      page = <IntroForm onGeocodeSubmit = {this.onGeocodeSubmit} onBackendSubmit= {this.onBackendSubmit} onChangeBackend = {this.onChangeBackend} onChangeGeocode = {this.onChangeGeocode} backendBoolean = {this.state.backendBoolean} geocodeBoolean = {this.state.geocodeBoolean}/>;
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
      location: '',
      geocodeKey: this.props.geocodeKey,
      backendUrl: this.props.backendUrl,
      locationUrl: '',
      result:''
    }

    this.onSearchChange = (event) => {
      this.setState({location: event.target.value});
    }
  
    this.onSearchSubmit = (event) => {
      event.preventDefault();
      this.getLocation();
    }

    this.getLocation = () => {
      return superagent
        .get(`${this.state.backendUrl}/location?data={data:${this.state.location}}`)
        .then(res => {
          console.log(res);
          this.setState({
            result: res.body, 
            locationUrl:`https://maps.googleapis.com/maps/api/staticmap?center=${res.body.latitude}%2c%20${res.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${this.state.geocodeKey}`});
        });
    }
  }

  render() {
    return (
      <Fragment>
        <SearchForm location = {this.state.location} onSearchChange = {this.onSearchChange} onSearchSubmit = {this.onSearchSubmit}/>
        <Map geocodeKey = {this.state.geocodeKey} location = {this.state.locationUrl}/>
        <Result />
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
