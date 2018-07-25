import React, { Component } from 'react';

const updateBurgerCategory = (e, props) => {
  fetch(`http://localhost:3001/burgers/${props.currentBurger.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({category: e.target.value})
  })
}

const BurgerDisplay = (props) => {
    return (
      <div className="BurgerDisplay">
        <img src={props.currentBurger.imgURL}/>
        <br/>
        <h2>{props.currentBurger.name}</h2>
        <br/>
        <select onChange={(e) => updateBurgerCategory(e, props)} selected={props.currentBurger.category}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
}

export default BurgerDisplay
