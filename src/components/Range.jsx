import React from 'react'

export default ({ min, max, handleChangeMin, handleChangeMax, handleNewNumber }) => {
  return (
    <section className='range-container'>
      <input type='number' className='min-input' aria-label='input' placeholder={min} onChange={(e) => handleChangeMin(e)} />
      <input type='number' className='max-input' aria-label='input' placeholder={max} onChange={(e) => handleChangeMax(e)} />
      <button className='submit-range' onClick={() => handleNewNumber()}>Change Range</button>
    </section>
  )
}
