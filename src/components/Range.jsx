import React, { Component } from 'react';


export default class Range extends Component {
  render() {
    return (
      <section className='ranger-container'>
        <input type='number' className='low-field' aria-label='input' />
        <input type='number' className='high-field' aria-label='input'/>
        <button className='submit-range'>Change Range</button>
      </section>
    )
  }
}
