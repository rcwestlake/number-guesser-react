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

  resetGame() {
    this.setState({
      randomNum: null,
      guess: null,
      min: 0,
      max: 0,
    })
  }

  compareNumbers() {
    this.updateGuessState()
    if(this.state.randomNum) {
      console.log('compareNumbers function')
    }
  }

  generateRandomNumber() {
    const number = Math.floor((Math.random() * this.state.max) + 1)
    this.setState=({
      randomNum: number
    })
    console.log(number)
  }

  updateGuessState(e) {
    const input = document.querySelector('.guess-input')
    const value = input.value
    this.setState({
      guess: value
    })
  }

  render() {
    return (
      <section className='game-container'>
        <GuessField handleChangeGuess={this.compareNumbers} handleRandomNumber={this.generateRandomNumber} handleResetGame={this.resetGame}/>
        <Display guess={this.state.guess}/>
      </section>
    )
  }
}
