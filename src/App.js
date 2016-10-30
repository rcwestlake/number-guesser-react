import React, { Component } from 'react'
import GuessField from './components/GuessField.jsx'
import Display from './components/Display.jsx'
import Header from './components/Header.jsx'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state=({
      randomNum: null,
      guess: null,
      min: 0,
      max: 100,
      feedback: ''
    })

    this.compareNumbers = this.compareNumbers.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  generateRandomNumber() {
    let newRandomNumber = Math.floor((Math.random() * this.state.max) + 1);
    this.setState({ randomNum: newRandomNumber }, () => {
      this.compareNumbers();
    });
  }

  compareNumbers() {
    if(this.state.randomNum === null) {
      this.generateRandomNumber()
      this.clearInput()
    } else {
      this.checkGame()
    }
  }

  checkGame() {

  }

  updateGuessState(e) {
    const value = parseInt(e.target.value, 10);
    this.setState({ guess: value })
  }

  resetGame() {
    this.setState({
      randomNum: null,
      guess: null,
      min: 0,
      max: 0,
    })
    this.clearInput();
  }

  clearInput() {
    return document.querySelector('.guess-input').value = '';
  }

  feedback() {
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
    return feedback
  }

  changeMaxRange() {

  }

  changeMinRange() {

  }

  render() {
    let feedback = this.feedback()
    return (
      <section className='application'>
        <Header />
        <section className='game-container'>
          <GuessField
            handleGuessState={(e) => this.updateGuessState(e)}
            handleGame={this.compareNumbers}
            handleResetGame={this.resetGame}
            min={this.state.min}
            max={this.state.max}
          />
          <Display guess={this.state.guess} feedback={feedback} />
        </section>
      </section>
    )
  }
}
