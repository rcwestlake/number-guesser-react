import React, { Component } from 'react';
import Range from './Range.jsx'


export default class Header extends Component {
  render() {
    return (
      <section className='header'>
        <h1>Number Guesser</h1>
        <p>To play, [placeholder for instructions]</p>
        <Range />
      </section>
    )
  }
}
