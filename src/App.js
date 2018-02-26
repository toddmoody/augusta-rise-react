import React, { Component } from 'react';
import MainNav from './components/MainNav'
import Intro from './components/Intro'
import HeaderImg from './assets/header-img.png'
// import headerImg from './assets/header-bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNav />
        <section className="hero-header">
          <div className="centre-content">
            <img src={HeaderImg} alt="Sections Available Now" />
          </div>
        </section>                                                          
      <Intro /> 
    </div>
    );
  }
}

export default App;
