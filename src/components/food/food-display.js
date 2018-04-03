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
          data[this.props.category].map(function (soup, index){
            return <FoodItem name={soup.name} key={index} description={soup.description} cost={soup.cost}
            iurl={soup.iurl} type={soup.type} cost={soup.cost}/>;
          })
        }
      </div>
      </div>
    );
  }
}
export default FoodDisplay;
