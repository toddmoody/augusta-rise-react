import React, { Component } from 'react';
import MainNav from './components/MainNav'
import Header from './components/Header'
import Intro from './components/Intro'
import HeaderImg from './assets/header-img.png'
// import headerImg from './assets/header-bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainNav />   
      <Header />                                                   
      <Intro /> 
    </div>
    );
  }
}

export default App;
