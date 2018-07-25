import React, { Component } from 'react';

const showClickHandler = (props) => {
  props.getAndSetBurgerToShow(props.burgerObj)
}

const hideHandler = (props) => {
  props.pushToHideArray(props.burgerObj.id)
}

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        { props.burgerObj.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={()=>showClickHandler(props)}>Show</button>
        <button onClick={() => hideHandler(props)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
