import React, { Component } from 'react';
import './header.css';
import logo from './logo.png';
import SignInOut from './signing/signInOut';
import CartIcon from './cart/cartIcon-component';
import { Image } from 'react-bootstrap';


export class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header_components">
				<div className="logodiv" >				
					<Image src={logo} alt={'logo_image'} height="120px" />
				</div>
				<SignInOut />	
				<CartIcon />	
				</div>		
			</div>
		);
	}
}
export default Header;