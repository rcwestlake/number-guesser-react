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
    let min = parseInt(this.state.min, 10)
    let max = parseInt(this.state.max, 10)

    let newRandomNumber = Math.floor((Math.random() * (max - min)) + min);
    this.setState({ randomNum: newRandomNumber }, () => {
      this.compareNumbers();
    });
    
    this.setState({
      feedback: ''
    })
  }

  compareNumbers() {
    if(this.state.randomNum === null) {
      this.generateRandomNumber();
      this.clearInput();
    } else {
      this.checkGame();
    }
  }

  checkGame() {
    if(this.state.guess < this.state.randomNum) {
      this.setState({feedback: 'That guess is too low. Try a higher number.'});
      this.clearInput();
    } else if(this.state.guess > this.state.randomNum) {
      this.setState({feedback: 'That guess is too high. Try a lower number.'});
      this.clearInput();
    } else {
      this.setState({feedback: 'Congratulations! You win. Now it will be harder (min and max changed).'});
      this.newGame();
    }
  }

  updateGuessState(e) {
    const input = document.querySelector('.guess-input');
    const value = parseInt(e.target.value, 10);

    if(input.value.length > 0) {
      this.setState({ disabled: false });
    }

    if(value < this.state.min || value > this.state.max) {
      this.setState({ guess: value, error: 'Please enter number in range', disabled: true });
    } else {
      this.setState({ guess: value, error: '', disabled: false });
    }

    if(isNaN(value)) {
      this.setState({ guess: null, error: 'Please enter a number', disabled: true });
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

  updateMinRange(e) {
    this.setState({
      min: parseInt(e.target.value, 10)
    })
  }

  updateMaxRange(e) {
    this.setState({
      max: parseInt(e.target.value, 10)
    })
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
          <Range
            min={min}
            max={max}
            handleChangeMin={(e) => this.updateMinRange(e)}
            handleChangeMax={(e) => this.updateMaxRange(e)}
            handleNewNumber={() => this.generateRandomNumber()}
          />
          <Display guess={guess} feedback={feedback} />
        </section>
      </section>
    )
  }
}
