import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';
import EmptyPlate from '../../../data/images/EmptyPlate.svg';
import { Image } from 'react-bootstrap';
import CartItem from './cartItemDisplay';

export class CartIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCartModal: false,
		};
		this.handleCartClick = this.handleCartClick.bind(this);
		this.closeCartModal = this.closeCartModal.bind(this);
	}
	handleCartClick() {
		this.setState({ showCartModal: true });
	}
	closeCartModal() {
		this.setState({ showCartModal: false });
	}
	render() {
		return (
			<div className="cart">
				<a onClick={this.handleCartClick}>Bag</a>
				{this.props.itemReducer.itemCount > 0 ?
					<span>{this.props.itemReducer.itemCount}</span> : ''
				}
				<div className="carts-modal">
					<Modal show={this.state.showCartModal} keyboard={false} dialogClassName="cartModal"
						onHide={this.closeCartModal}>
						<div>
							<ModalHeader closeButton={true} >
								<ModalTitle>Your Shopping Bag</ModalTitle>
							</ModalHeader>
							<ModalBody>
								{this.props.itemReducer.itemCount > 0 ?
									<div>
										{
											this.props.itemReducer.items.map((item, index) => {
												return <CartItem key={index} foodid={item.foodid} 
												name={item.name} cost={item.cost} count={item.count} />
											})
										}</div> : <Image src={EmptyPlate} />}
							</ModalBody>
						</div>
					</Modal>
				</div>
			</div>

		);
	}
}
export default connect(state => state)(CartIcon);