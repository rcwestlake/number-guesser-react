import React from 'react'

export default ({ handleGuessState, handleGame, handleResetGame, handleClear, min, max, error, disabled  }) => {
  return (
    <div>
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
        <button type='button' disabled={disabled} onClick={() => handleGame()}>Guess</button>
        <button type='button' disabled={disabled} onClick={() => handleClear()}>Clear</button>
        <button type='button' disabled={disabled} onClick={() => handleResetGame()}>Reset Game</button>
      </form>
    </section>
</div>
  )
}
