import React, { Component } from 'react';
import './fooditem.css';
import { Image } from 'react-bootstrap';
import Images from '../../data/images/images'
import AddItemButton from './additembutton';
import Veg from '../../data/images/Veg.png';
import NonVeg from '../../data/images/Non-Veg.png';
import { connect } from 'react-redux';

class FoodItem extends Component {
  
    render() {
        return (
            <div className="w3-quarter fooditem">
                <div className="food_image">
                    <Image src={Images[this.props.iurl]} responsive />
                </div>
                <div className="vnv_image">
                {this.props.type==="v"?
                      <Image src={Veg} responsive />
                :<Image src={NonVeg} responsive />
                }
                </div>
                <div className="food_name">
                {this.props.name}
                </div>
                <div className="food_desc">
                {this.props.description}
                </div>
                <div className="food_cost">
                &#8377;&nbsp;{this.props.cost}
                </div>
                <AddItemButton name={this.props.name}  cost={this.props.cost}
             foodid={this.props.foodid}  type={this.props.type} />
            </div>
           
        );
    }
}
export default connect(state => state)(FoodItem);
