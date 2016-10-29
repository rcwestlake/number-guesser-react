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
          <button type='button' onClick='to be filled in'>Guess</button>
        </form>
      </section>
    )
  }
}
