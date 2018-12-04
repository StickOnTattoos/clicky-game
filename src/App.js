import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from "./components/Game"
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Game />
      </div>
    );
  }
}

export default App;
