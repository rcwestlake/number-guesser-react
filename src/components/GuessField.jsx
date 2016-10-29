import React, { Component } from 'react';


export default class GuessField extends Component {
  constructor(props) {
    super(props)

    this.state=({

    })
  }

  updateGuessState() {

  }

  render() {
    return (
      <section className='guess-container'>
        <form className='guess-form'>
          <input type='number' aria-label='input' onChange={() => this.updateGuessState()} className='guess-input' />
          <button type='button' onClick='TO BE FILLED IN'>Guess</button>
          <button type='button' onClick='TO BE FILLED IN'>Clear</button>
        </form>
      </section>
    )
  }
}
