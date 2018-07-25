import React, { Component } from 'react';

export default class BurgerFilter extends Component {

  categoryChangeHandler = (e) => {
    this.props.getCategory(e.target.value)
  }

  render(){
    return (
      <div className="BurgerFilter">
        <select onChange={this.categoryChangeHandler}>
          <option value="All">All</option>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }
}
