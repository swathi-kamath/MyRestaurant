import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';

export class CartIcon extends Component {
	constructor(props) {
        super(props);
        this.state = {
            showCartModal:false,
        };
		this.handleCartClick = this.handleCartClick.bind(this);
		this.closeCartModal = this.closeCartModal.bind(this);
	}
	handleCartClick(){
		this.setState({showCartModal:true});
	}
	closeCartModal(){
		this.setState({showCartModal:false});
	}
	render() {
		return (
			<div className="cart">
				<a onClick={this.handleCartClick}>Bag</a>
				<div className="carts-modal">
                <Modal backdrop={'static'} show={this.state.showCartModal} keyboard={false} dialogClassName="cartModal"
                    onHide={this.closeCartModal}>
                   
                        <div>
                            <ModalHeader closeButton={true} >
                                <ModalTitle>Your Shopping Bag</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
							   {this.props.itemReducer.itemCount}
							   <br/>
							   {
							  this.props.itemReducer.items.map((item)=>{
							  })
							   }

							  
			
						
							   
                            </ModalBody>
                        </div> 
                </Modal>
            </div>
            </div>
			
        );
    }
}
export default connect(state => state)(CartIcon);