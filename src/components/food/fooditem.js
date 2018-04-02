import React, { Component } from 'react';
import './fooditem.css';
import { Image } from 'react-bootstrap';
import Images from '../../data/images/images'


import image from "../../data/images/soups/Coconut_Mint.jpg"
class FoodItem extends Component {
    render() {
        return (
            <div className="w3-container w3-third fooditem">
                <div className="food_image">
                    <Image src={Images[this.props.iurl]} responsive />
                </div>
                <div className="food_name">
                <h4>{this.props.name}</h4>
                </div>
                <div className="food_desc">
                {this.props.description}
                </div>
                <div className="food_cost">
                &#8377;{this.props.cost}
                </div>
            </div>
           
        );
    }
}
export default FoodItem;
