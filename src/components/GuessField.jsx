import React, { Component } from 'react'
import Range from './Range.jsx'

export default class GuessField extends Component {
  render() {
    //TODO: add onClick for buttons
    return (
      <div>
      <Range />
      <section className='guess-container'>
      <form className='guess-form'>
      <input
            type='number'
            placeholder='Make a guess'
            aria-label='input'
            className='guess-input' />
      <button
            type='button'
            onClick={(e) => this.props.handleChangeGuess(e)}>Guess</button>
      <button type='button'>Clear</button>
      </form>
      </section>
      </div>
    )
  }
}
