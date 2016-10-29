import React, { Component } from 'react'
import Header from './components/Header.jsx'
import GuessFieldContainer from './containers/GuessFieldContainer.jsx'
import './App.css'

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
        <GuessFieldContainer />
      </section>
    );
  }
}
