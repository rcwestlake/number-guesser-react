import React from 'react'

export default ({ handleGuessState, handleGame, handleResetGame, handleClear, min, max, error, disabled, disabledCase  }) => {

  return (
    <div>
    <section className='guess-container'>
      <section className='header'>
        <h1 className='title'>Number Guesser</h1>
      </section>
      <form className='guess-form'>
        <input
            type='number'
            placeholder='Guess'
            aria-label='input'
            className='guess-input'
            onChange={(e) => handleGuessState(e)}
            min={min}
            max={max}
            />
        <p className='error'>{error}</p>
        <button type='button' disabled={disabled} onClick={() => handleGame()}>Guess</button>
        <button type='button' disabled={disabled} onClick={() => handleClear()}>Clear</button>
        <button type='button' className='reset-button' disabled={disabledCase} onClick={() => handleResetGame()}>Reset Game</button>
      </form>
    </section>
</div>
  )
}
