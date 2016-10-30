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
    const input = document.querySelector('.guess-input');
    input.value = ''
  }

  resetGame() {
    console.log('entered reset game function');
    this.setState({
      randomNum: null,
      guess: null,
      min: 0,
      max: 0,
    })
    this.clearInput();
  }

  compareNumbers() {
    const input = document.querySelector('.guess-input');
    let value = parseInt(input.value);
    this.setState({
      guess: value,
    })

    if(!this.state.randomNum) {
      let randomNumber = this.generateRandomNumber();
      console.log(randomNumber);

      this.setState({
        randomNum: randomNumber
      })
    }

    this.checkGame()
  }

  generateRandomNumber() {
    return Math.floor((Math.random() * this.state.max) + 1);
  }

  updateGuessState() {
    const input = document.querySelector('.guess-input');
    let value = input.value;
    console.log(value);
    this.setState({
      guess: value
    })
  }

  render() {
    return (
      <section className='game-container'>
        <GuessField
          // handleChangeGuess={this.updateGuessState}
          handleGame={this.compareNumbers}
          handleRandomNumber={this.generateRandomNumber}
          handleResetGame={this.resetGame}
          handleClear={this.clearInput}
          min={this.state.min}
          max={this.state.max}
        />
        <Display guess={this.state.guess} />
      </section>
    )
  }
}
