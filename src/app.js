import React, { Component } from 'react';
import { Fragment } from 'react';
import { SearchForm } from './searchForm';
import { IntroForm } from './introForm';
import './App.css';

class App extends Component {



  render() {
    return (
      <Fragment>
        <Intro/>
        <Header/>
        <Main/>
      </Fragment>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <IntroForm/>
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
        <Search/>
        <Map/>
        <Result/>
      </Fragment>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <Fragment>
        <SearchForm/>
      </Fragment>
    )
  }
}

class Map extends Component {

}

class Result extends Component {

}



export default App;
