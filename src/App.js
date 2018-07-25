import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgers: [],
    currentBurger: {}
  }

  getAndSetBurgerToShow = (burger) => {
    this.setState({currentBurger: burger})
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers')
    .then(r => r.json())
    .then(data => this.setState({burgers: data}))
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgerObjs={this.state.burgers} getAndSetBurgerToShow={this.getAndSetBurgerToShow}/>
        <BurgerDisplay currentBurger={this.state.currentBurger}/>
      </div>
    );
  }
}

export default App;
