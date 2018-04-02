import React, { Component } from 'react';
import data from '../../data/soups.json';
import FoodItem from './fooditem';
import './fooditem.css';

class SoupsDisplay extends Component {
  render() {
    return (
      <div className="food-display">     
        {          
          data["soups"].map(function (soup, index){
            return <FoodItem name={soup.name} key={index} description={soup.description} cost={soup.cost}
            iurl={soup.iurl} type={soup.type} cost={soup.cost}/>;
          })
        }
      </div>
    );
  }
}
export default SoupsDisplay;
