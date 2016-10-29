import React from 'react'

const SubmitButton = (props) => {
  return (
    <button
          type='button'
          onClick={(e) => props.handleChangeGuess(e)}>Guess
    </button>
  )
}

module.exports = SubmitButton
