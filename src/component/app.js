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
      geocodeBoolean: true,
      backendBoolean: true, 
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
      this.setState({locationUrl:''})
      this.getLocation();
    }

    this.getLocation = () => {
      return superagent
        .get(`https://city-explorer-vinh-jhia.herokuapp.com/location`)
        .query({data:this.state.location})
        .then(res => {
          this.setState({
            result: res.body, 
            locationUrl:`https://maps.googleapis.com/maps/api/staticmap?center=${res.body.latitude}%2c%20${res.body.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyBGHpXSm0MLinRX3HdexJ4JiUDDam3NW50`});
        });
    }
  }

  render() {
    return (
      <Fragment>
        <SearchForm location = {this.state.location} onSearchChange = {this.onSearchChange} onSearchSubmit = {this.onSearchSubmit}/>
        <Map geocodeKey = {this.state.geocodeKey} location = {this.state.locationUrl}/>
        <SearchResult />
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
