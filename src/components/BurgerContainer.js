import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  state = {
    currentCategory: "All"
  }

  getCategory = (category) => {
    this.setState({currentCategory: category})
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter getCategory={this.getCategory}/>
        <BurgerList burgerObjs={this.props.burgerObjs} getAndSetBurgerToShow={this.props.getAndSetBurgerToShow} listCategory={this.state.currentCategory}/>
      </div>
    )
  }
}
