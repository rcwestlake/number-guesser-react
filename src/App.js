import React, { Component } from 'react'
import GuessField from './components/GuessField.jsx'
import Display from './components/Display.jsx'
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
    let min = parseInt(this.state.min, 10);
    let max = parseInt(this.state.max, 10);

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
    } else if(this.state.guess > this.state.randomNum) {
      this.setState({feedback: 'That guess is too high. Try a lower number.'});
    } else {
      this.setState({feedback: 'Congratulations! You win. Now it will be harder (min and max changed).'});
    }
    this.clearInput();
    this.setState({ disabled: true })
  }

  updateGuessState(e) {
    const input = document.querySelector('.guess-input');
    const value = parseInt(e.target.value, 10);

    if(input.value.length > 0) {
      this.setState({ disabled: false });
    }

    if(value < this.state.min || value > this.state.max) {
      this.setState({ guess: value, error: 'Please enter number in the range', disabled: true });
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
      error: '',
      feedback: '',
      disabled: true
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
      error: '',
      disabled: true
    })
    this.clearInput();
    this.clearRangeFields();
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
    this.clearInput();
  }

  clearInput() {
    return document.querySelector('.guess-input').value = '';
  }

  clearRangeFields() {
    document.querySelector('.min-input').value = '';
    document.querySelector('.max-input').value = '';
  }


  render() {
    const { guess, feedback, max, min, error, disabled } = this.state;
    let newGameButton;
    let resetDisabled = (
      guess === null ? true : false
    )

    if(this.state.feedback === 'Congratulations! You win. Now it will be harder (min and max changed).') {
      newGameButton = <button className='new-game-btn'>New Game</button>
    }

    return (
      <section className='application'>
        <section className='game-container'>
          <section className='left-container'>
            <GuessField
            handleGuessState={(e) => this.updateGuessState(e)}
            handleGame={() => this.compareNumbers()}
            handleResetGame={() => this.resetGame()}
            handleClear={() => this.clearGuessState()}
            min={min}
            max={max}
            error={error}
            disabled={disabled}
            disabledCase={resetDisabled}
            />
            <Range
            min={min}
            max={max}
            handleChangeMin={(e) => this.updateMinRange(e)}
            handleChangeMax={(e) => this.updateMaxRange(e)}
            handleNewNumber={() => this.generateRandomNumber()}
            />
          </section>
          <Display guess={guess} feedback={feedback} button={newGameButton} startGame={() => this.newGame()}/>
        </section>
      </section>
    )
  }
}
