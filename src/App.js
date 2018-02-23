import React, { Component } from 'react';
import Nav from './components/Nav'
import Intro from './components/Intro'
import headerImg from './assets/header-bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <section className="hero-header">
          <div className="centre-content">
            <h1>SECTIONS</h1>
            <h3>Available Now</h3>
            <img src="" />
          </div>
        </section>
      <Intro /> 
    </div>
    );
  }
}

export default App;
