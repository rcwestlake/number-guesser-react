import React from 'react'

const ResetButton = (props) => {
  return (
    <button
          type='button'
          onClick={() => props.handleReset()}>Reset Game
    </button>
  )
}

module.exports = ResetButton
