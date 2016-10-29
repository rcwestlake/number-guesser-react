import React, { Component } from 'react';


export default class Display extends Component {
  render() {
    return (
      <section className='display-section'>
        <p className='guess'>Your Guess: </p>
        <p className='guess-feedback'>Your guess was too low</p>
      </section>
    )
  }
}
