import React, { Component } from 'react'
import Range from './Range.jsx'


export default ({ handleChangeGuess, handleResetGame, handleClear  }) => {
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
      <button type='button' onClick={handleChangeGuess}>Guess</button>
      <button type='button' onClick={handleClear}>Clear</button>
      <button type='button' onClick={handleResetGame}>Reset Game</button>
    </form>
    </section>
    </div>
  )
}
