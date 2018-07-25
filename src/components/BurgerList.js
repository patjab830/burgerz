import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {

  state = {
    burgerIdsToHide: []
  }

  pushToHideArray = (id) => {
    const idArray = [...this.state.burgerIdsToHide]
    idArray.push(id)
    this.setState({burgerIdsToHide: idArray})
  }

  render(){
    return (
      <div className="BurgerList">
        { this.props.burgerObjs.filter((burger) => {
            if ( this.state.burgerIdsToHide.includes(burger.id) ) {
              return false
            } else {
              return this.props.listCategory !== "All" ? burger.category === this.props.listCategory : true
            }
          }).map((burger) => {
            return <BurgerItem burgerObj={burger} key={burger.id} getAndSetBurgerToShow={this.props.getAndSetBurgerToShow} pushToHideArray={this.pushToHideArray}/>
          })
        }
      </div>
    )
  }
}
