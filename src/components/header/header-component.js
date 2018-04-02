import React, { Component } from 'react';
import './header.css';
import logo from './logo.png';
import SignInOut from './signing/signInOut';


export class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logodiv" >				
					<img src={logo} alt={'logo_image'} height="120px" />
				</div>
				<SignInOut />				
			</div>
		);
	}
}
export default Header;