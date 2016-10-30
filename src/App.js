import React from 'react'
import Header from './components/Header.jsx'
import GuessFieldContainer from './containers/GuessFieldContainer.jsx'
import './App.css'

export default () => {
  return (
    <section className="application">
      <Header />
      <GuessFieldContainer />
    </section>
  );
}
