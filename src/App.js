import React, { Component } from 'react';
import Header from './components/Header.jsx'
import GuessField from './components/GuessField.jsx'
import Display from './components/Display.jsx'
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state=({

    })
  }
  render() {
    return (
      <section className="application">
        <Header />
        <section className='display-container'>
          <GuessField />
          <Display />
        </section>
      </section>
    );
  }
}
