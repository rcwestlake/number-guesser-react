import React, { Component } from 'react'
import Range from './Range.jsx'
import SubmitButton from './SubmitButton.jsx'
import ClearButton from './ClearButton.jsx'


export default class GuessField extends Component {
  render() {
    const { handleChangeGuess, handleResetGame } = this.props
    return (
      <div>
      <Range />
      <section className='guess-container'>
      <form className='guess-form'>
        <input
            type='number'
            placeholder='Make a guess'
            aria-label='input'
            className='guess-input'
            />
        <SubmitButton handleChangeGuess={handleChangeGuess}/>
        <ClearButton handleResetGame={handleResetGame} />
      </form>
      </section>
      </div>
    )
  }
}
