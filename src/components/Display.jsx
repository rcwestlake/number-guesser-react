import React from 'react';


export default ({ guess, feedback }) => {
  console.log(guess)

  return (
    <section className='display-section'>
      <p className='guess'>Your Guess: {guess}</p>
      <p className='guess-feedback'>{feedback}</p>
    </section>
  )
}
