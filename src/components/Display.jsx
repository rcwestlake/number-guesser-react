import React, { Component } from 'react';


export default class Display extends Component {
  render() {
    const { guess } = this.props
    console.log(guess)

    return (
      <section className='display-section'>
        <p className='guess'>Your Guess: {guess}</p>
        <p className='guess-feedback'>Your guess was too low</p>
      </section>
    )
  }
}
