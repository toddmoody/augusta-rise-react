import React, { Component } from 'react';

import './css/NotReady.css';

class NotReady extends Component {
  render() {
    return (
      <section className="container-not-ready">
        <h2 className="not-ready-lead">Stage one is selling now!</h2>
        <br />
        <h2 className="not-ready-lead">Not ready? No problem, register your interest in Stage Two.</h2>
      </section>
    );
  }
}

export default NotReady;