import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import Veg from '../../../data/images/Veg.png';
import NonVeg from '../../../data/images/Non-Veg.png';
import { Image } from 'react-bootstrap';
import AddItemButton from '../../food/additembutton';

export class CartItem extends Component {
    constructor(props) {
        super(props);
        this.removeClick = this.removeClick.bind(this);
    }
    removeClick() {
    }
    render() {
        return (
            <div className="cartItem">
                <div className="cart_part_1">
                    <div className="cart_vn_image">
                        {this.props.type === "v" ?
                            <Image src={Veg} responsive />
                            : <Image src={NonVeg} responsive />
                        }
                    </div>
                    <div className="cart_food_name">
                        {this.props.name}
                    </div>
                </div>
                <div>
                    <div className="cart_cost">
                       '{this.props.count}*{this.props.cost}'
                    </div>
                    <div className="cart_add_button">
                        <AddItemButton name={this.props.name} cost={this.props.cost}
                            foodid={this.props.foodid} type={this.props.type} />
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state)(CartItem);