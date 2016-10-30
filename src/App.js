import React, { Component } from 'react'
import GuessField from './components/GuessField.jsx'
import Display from './components/Display.jsx'
import Header from './components/Header.jsx'
import Range from './components/Range.jsx'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state=({
      randomNum: null,
      guess: null,
      min: 0,
      max: 100,
      feedback: '',
      error: '',
      disabled: true
    })
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
    if(this.state.guess < this.state.randomNum) {
      this.setState({feedback: 'That guess is too low. Try a higher number.'})
    } else if(this.state.guess > this.state.randomNum) {
      this.setState({feedback: 'That guess is too high. Try a lower number.'})
    } else {
      this.setState({feedback: 'Congratulations! You win. Now it will be harder (min and max changed).'})
      this.newGame()
    }
  }

  updateGuessState(e) {
    const input = document.querySelector('.guess-input')
    const value = parseInt(e.target.value, 10);

    if(value < this.state.min || value > this.state.max) {
      this.setState({ guess: null, error: 'Please enter number in range', disabled: true })
    } else {
      this.setState({ guess: value, error: '', disabled: true })
    }

    if(isNaN(value)) {
      this.setState({ guess: null, error: 'Please enter a number', disabled: true })
    }

    if(input.value.length > 0) {
      this.setState({ disabled: false })
    }
  }

  newGame() {
    this.setState({
      randomNum: null,
      min: this.state.min - 10,
      max: this.state.max + 10,
      error: ''
    })
    this.clearInput();
  }

  resetGame() {
    this.setState({
      randomNum: null,
      guess: null,
      min: 0,
      max: 100,
      feedback: '',
      error: ''
    })
    this.clearInput();
  }

  updateRange() {

  }

  clearGuessState() {
    this.setState({
      guess: null,
      disabled: true
    })
  }

  clearInput() {
    return document.querySelector('.guess-input').value = '';
  }


  render() {
    const { guess, feedback, max, min, error, disabled } = this.state;
    return (
      <section className='application'>
        <Header />
        <section className='game-container'>
          <GuessField
            handleGuessState={(e) => this.updateGuessState(e)}
            handleGame={() => this.compareNumbers()}
            handleResetGame={() => this.resetGame()}
            handleClear={() => this.clearInput()}
            min={min}
            max={max}
            error={error}
            disabled={disabled}
          />
          <Range min={min} max={max} handleChangeRange={() => this.updateRange()}/>
          <Display guess={guess} feedback={feedback} />
        </section>
      </section>
    )
  }
}
