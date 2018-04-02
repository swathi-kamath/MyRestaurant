import Modal from 'react-bootstrap/lib/Modal';
import { ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap';
import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import './signInModal.css';
import { connect } from 'react-redux';
import { addActiveUser } from '../../../actions';
import data from '../../../data/user.json';
const fs = require('fs');


export class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInFailed:false,
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }
    onPasswordChange(e) {
        this.setState({ userPassword: e.target.value });
    }
    onPhoneNumberChange(e) {      
            this.setState({ userPhoneNumber: e.target.value });        
    }
    handleSignInClick(e) {       
        let signInFailed=true;
        data["users"].map(function(user) {
            if (user.phone === this.state.userPhoneNumber && user.password === this.state.userPassword) {
                signInFailed=false;
                this.props.dispatch(addActiveUser(this.state.userPhoneNumber));
            }
        }, this);
        this.setState({signInFailed:signInFailed});
        if (!signInFailed) {
            this.props.closeSignInUpModal();
            this.props.setShowSignUpLink(false);
        } 
    }
    render() {
        return (
            <div className="sign-in-modal">
                <Modal backdrop={'static'} show={this.props.showSignInUpModal} keyboard={false} dialogClassName="signInUpModal"
                    onHide={this.props.closeSignInUpModal}>
                   
                        <div>
                            <ModalHeader closeButton={true} >
                                <ModalTitle>Sign in to your account</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                {this.state.signInFailed ?
                                    <div className="signInFailMessage"><p>Invaild Login. Please try again</p></div>
                                    : ''
                                }
                                <input type="text" maxLength="10" value={this.state.userPhoneNumber} onChange={this.onPhoneNumberChange} placeholder="User Name" />
                                <br />
                               <input type="Password" maxLength="8" value={this.state.userPassword} onChange={this.onPasswordChange} placeholder="Password" />
                                <br /><br />
                                <div >
                                    <Button className="signin" onClick={this.handleSignInClick}>Sign In</Button>
                                </div>
                            </ModalBody>
                        </div> 
                </Modal>
            </div>

        );
    }
}

export default connect(state => state)(SignInModal);
