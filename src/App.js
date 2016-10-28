import React, { Component } from 'react';
import Header from './components/Header.jsx'
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state=({
      randomNumber: null,
      userGuess: null
    })
  }
  render() {
    return (
      <section className="application">
        <Header />

      </section>
    );
  }
}
