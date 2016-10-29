import React, { Component } from 'react'
import GuessField from '../components/GuessField.jsx'
import Display from '../components/Display.jsx'

export default class GuessFieldContainer extends Component {
  constructor(props) {
    super(props)

    this.state=({
      randomNum: null,
      guess: null,
      min: 0,
      max: 100
    })
    this.updateGuessState = this.updateGuessState.bind(this)
    this.compareNumbers = this.compareNumbers.bind(this)
    this.generateRandomNumber = this.generateRandomNumber.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  changeMaxRange() {

  }

  changeMinRange() {

  }

  clearInput() {
    const input = document.querySelector('.guess-input')
    input.value = ''
  }

  resetGame() {
    console.log('entered reset game function')
    this.setState({
      randomNum: null,
      guess: null,
      min: 0,
      max: 0,
    })
    this.clearInput();
  }

  compareNumbers() {
    this.updateGuessState()
    if(!this.state.randomNum) {
      this.generateRandomNumber()
    }
  }

  generateRandomNumber() {
    const number = Math.floor((Math.random() * this.state.max) + 1)
    this.setState=({
      randomNum: number
    })
    console.log('random number: ', number)
  }

  updateGuessState() {
    const input = document.querySelector('.guess-input')
    let value = input.value
    console.log(value)
    this.setState({
      guess: value
    })
  }

  render() {
    return (
      <section className='game-container'>
        <GuessField handleChangeGuess={this.updateGuessState} handleRandomNumber={this.generateRandomNumber} handleResetGame={this.resetGame} handleClear={this.clearInput} />
        <Display guess={this.state.guess} />
      </section>
    )
  }
}
