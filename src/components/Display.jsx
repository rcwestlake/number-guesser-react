import React from 'react';


export default ({ guess }) => {
  console.log(guess)

  return (
    <section className='display-section'>
      <p className='guess'>Your Guess: {guess}</p>
      <p className='guess-feedback'>Your guess was too low</p>
    </section>
  )
}
