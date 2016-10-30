import React from 'react'
import Range from './Range.jsx'


export default ({ handleChangeGuess, handleResetGame, handleClear, min, max  }) => {
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
            min={min}
            max={max}

            />
        <button type='button' onClick={handleChangeGuess}>Guess</button>
        <button type='button' onClick={handleClear}>Clear</button>
        <button type='button' onClick={handleResetGame}>Reset Game</button>
      </form>
    </section>
    </div>
  )
}
