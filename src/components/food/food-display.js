import React, { Component } from 'react';
import data from '../../data/fooditems.json';
import FoodItem from './fooditem';
import './fooditem.css';

class FoodDisplay extends Component {
  render() {
    return (
      <div className="w3-container food-display">     
      <div className="w3-row">
        {          
          data[this.props.category].map(function (food, index){
            return <FoodItem name={food.name} key={index} description={food.description} cost={food.cost}
            iurl={food.iurl} type={food.type} foodid={food.foodid}/>;
          })
        }
      </div>
      </div>
    );
  }
}
export default FoodDisplay;
