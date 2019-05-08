import React, { Component } from 'react';
import { Fragment } from 'react';
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
      </Fragment>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <h1>City Explorer</h1>
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

}

class Map extends Component {

}

class Result extends Component {

}



export default App;
