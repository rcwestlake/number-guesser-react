import React from 'react'

const ClearButton = (props) => {
  return (
    <button
          type='button'
          onClick={() => props.handleResetGame()}>Clear
    </button>
  )
}

module.exports = ClearButton
