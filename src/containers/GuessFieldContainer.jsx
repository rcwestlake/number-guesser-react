import React, { Component } from 'react'
import GuessField from '../components/GuessField.jsx'
import Display from '../components/Display.jsx'

export default class GuessFieldContainer extends Component {
  constructor(props) {
    super(props)

    this.state=({
      randomNum: 0,
      guess: null,
      min: 0,
      max: 100,
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
    return document.querySelector('.guess-input').value = '';
  }

  resetGame() {
    console.log('entered reset game function');
    this.setState({
      randomNum: 0,
      guess: null,
      min: 0,
      max: 0,
    })
    this.clearInput();
  }

  compareNumbers() {
    const value = parseInt(document.querySelector('.guess-input').value, 0);
    this.setState({
      guess: value,
    })

    if(!this.state.randomNum) {
      let randomNumber = this.generateRandomNumber();
      this.setState({
        randomNum: randomNumber
      })
    }
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
    let feedback;
    if(this.state.guess < this.state.randomNum) {
        feedback = 'That guess is too low. Try a higher number.'
    } else if(this.state.guess > this.state.randomNum) {
        feedback = 'That guess is too high. Try a lower number.'
    } else if(this.state.guess === this.state.randomNum){
      feedback = 'Congratulations! You win.'
    } else {
      feedback = ''
    }
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
        <Display guess={this.state.guess} feedback={feedback} />
      </section>
    )
  }
}
