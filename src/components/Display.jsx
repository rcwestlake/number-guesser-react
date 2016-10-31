import React from 'react';


export default ({ guess, feedback }) => {
  console.log(guess)

  return (
    <section className='display-section'>
      <p className='guess-title'>Guess:</p>
      <p className='guess'>{guess}</p>
      <p className='guess-feedback'>{feedback}</p>
    </section>
  )
}
