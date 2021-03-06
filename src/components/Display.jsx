import React from 'react';

export default ({ guess, feedback, button, startGame }) => {
  return (
    <section className='display-section'>
      <p className='guess-title'>GUESS:</p>
      <p className='guess'>{guess}</p>
      <p className='guess-feedback'>{feedback}</p>
      <span onClick={() => startGame()}>{button}</span>
    </section>
  )
}
