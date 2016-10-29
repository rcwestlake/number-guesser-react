import React from 'react'

const ResetButton = (props) => {
  return (
    <button
          type='button'
          onClick={(e) => props.handleChangeGuess(e)}>Clear
    </button>
  )
}

module.exports = ResetButton
