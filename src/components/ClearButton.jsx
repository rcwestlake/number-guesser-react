import React from 'react'

const ClearButton = (props) => {
  return (
    <button
          type='button'
          onClick={() => props.handleClear()}>Clear
    </button>
  )
}

module.exports = ClearButton
