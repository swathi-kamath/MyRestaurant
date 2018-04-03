import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeActiveUser } from '../../../actions';
import SignInModal from './signInModal';

export class SignInOut extends Component {
	constructor(props) {
        super(props);
        this.state = {
			showSignInUpModal: false,
			showSignInUpLink:true
		};
		this.onSignInClick = this.onSignInClick.bind(this);
		this.closeSignInUpModal = this.closeSignInUpModal.bind(this);
		this.setShowSignUpLink = this.setShowSignUpLink.bind(this);
		this.onSignOutClick=this.onSignOutClick.bind(this);
	} 
	onSignInClick() {
		this.setState({ showSignInUpModal: true });		
	}
	onSignOutClick() {
		this.props.dispatch(removeActiveUser(this.state.userPhoneNumber));	
		this.setShowSignUpLink(true);
	}
	closeSignInUpModal() {
		this.setState({ showSignInUpModal: false });		
	}
	setShowSignUpLink(value){
		this.setState({ showSignInUpLink: value });
	}
	componentDidMount(){
		if(this.props.userReducer.activeUser === ""){
			this.setState({ showSignInUpLink: true });
		}else{
			this.setState({ showSignInUpLink: false });
		}
	}
	render() {
		return (

			<div className="signinout">
			{this.state.showSignInUpLink ?
			<div className="signinup">			
				<a onClick={this.onSignInClick}>Sign In</a>
				{this.state.showSignInUpModal ?
				<SignInModal  closeSignInUpModal={this.closeSignInUpModal} showSignInUpModal={this.state.showSignInUpModal} setShowSignUpLink={this.setShowSignUpLink}/>	:''
				}	
			</div>:
			<div className="signout">	
			Welcome {this.props.userReducer.activeUser}
			<br/><br />
			<a onClick={this.onSignOutClick}>Sign Out</a>
			</div>
			}		
			</div>
			
        );
    }
}
export default connect(state => state)(SignInOut);