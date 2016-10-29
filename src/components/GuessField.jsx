import React, { Component } from 'react'
import Range from './Range.jsx'
import SubmitButton from './SubmitButton.jsx'
import ClearButton from './ClearButton.jsx'
// import ResetButton from './ResetButton.jsx'


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
        <button
              type='button'
              onClick={handleChangeGuess}>Guess
        </button>

      {/* <SubmitButton handleChangeGuess={handleChangeGuess}/> */}
      <ClearButton handleClear={handleClear} />
      <button
            type='button'
            onClick={() => handleResetGame()}>Reset Game
      </button>
      {/* <ResetButton handleReset={handleResetGame} /> */}
    </form>
    </section>
    </div>
  )
}
