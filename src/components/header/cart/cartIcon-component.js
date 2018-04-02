import React, { Component } from 'react';
import './header.css';


export class CartIcon extends Component {
	render() {
		return (
			<div className="header">
				<div className="logobar">
					<img src={logo}  align = "center" alt={'logo_image'} height="120px"/>
									
				</div> 
            </div>
        );
    }
}
export default Header;