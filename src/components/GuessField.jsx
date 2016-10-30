import React from 'react'
import Range from './Range.jsx'


export default ({ handleGuessState, handleGame, handleResetGame, handleClear, min, max, error  }) => {
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
            onChange={(e) => handleGuessState(e)}
            min={min}
            max={max}
            />
        <p>{error}</p>
        <button type='button' onClick={() => handleGame()}>Guess</button>
        <button type='button' onClick={() => handleClear()}>Clear</button>
        <button type='button' onClick={() => handleResetGame()}>Reset Game</button>
      </form>
    </section>
</div>
  )
}
