import React, { Component } from 'react';
import './review.css';
import { connect } from 'react-redux';
import { addReview } from '../../actions';
import { ModalHeader, ModalBody, ModalTitle, FormControl, ModalFooter } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';
import ReactStars from 'react-stars';
class AddReviewButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlertModal: false,
            showReviewModal: false,
            showError:false,
            rating: 0,
            reviewText: ""
        };
        this.closeAlertModal = this.closeAlertModal.bind(this);
        this.closeReviewModal = this.closeReviewModal.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddReview=this.handleAddReview.bind(this);
    }
    handleAddReview(){
        if(this.state.rating===0){
            this.setState({ showError: true });
        }else{
            this.props.dispatch(addReview(
                {user:this.props.userReducer.activeUser,
                 rating:this.state.rating,
                 comments:this.state.reviewText
            }));
            this.setState({ showReviewModal: false });
        }
    }

    handleAddClick = () => {
        if (this.props.userReducer.activeUser === "") {
            this.setState({ showAlertModal: true });
        } else {
            this.setState({ showAlertModal: false });
            this.setState({ showReviewModal: true });
        }
    }
    closeReviewModal() {
        this.setState({ showReviewModal: false });
    }
    closeAlertModal() {
        this.setState({ showAlertModal: false });
    }
    ratingChanged(newRating) {
        this.setState({ rating: newRating });
        if(newRating>0){
            this.setState({ showError: false });
        }
    }
    handleTextChange(e) {
        this.setState({ reviewText: e.target.value });
    }
    render() {
        return (
            <div className="add_review_div">
                <div className="add_review_button_div button" onClick={this.handleAddClick}>
                    <span className="text">Add Review &nbsp;&nbsp;&nbsp;&#9998;</span>
                </div>

                <Modal backdrop={'static'} show={this.state.showAlertModal} keyboard={false} dialogClassName="alertModal"
                    onHide={this.closeAlertModal}>
                    <div>
                        <ModalHeader closeButton={true} >
                            <ModalTitle> Alert </ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <h4> Please Sign in to Add review ! </h4>
                        </ModalBody>
                    </div>
                </Modal>
                <Modal backdrop={'static'} show={this.state.showReviewModal} dialogClassName="addReviewModal"
                    onHide={this.closeReviewModal}>
                    <div>
                        <ModalHeader closeButton={true} >
                            <ModalTitle> Write a Review ! </ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            {this.state.showError ?
                            <span style={{'color':'red'}}>Please provide a rating</span>
                            :''
                            }
                            <div className="add_rating">
                                Rating :<span>{this.state.rating}</span>
                                <ReactStars
                                    edit={true}
                                    count={5}
                                    onChange={this.ratingChanged}
                                    value={this.state.rating}
                                    half={true}
                                    size={32}
                                />
                            </div>
                            <FormControl componentClass="textarea" placeholder="Please type in your review here" rows={8}
                                value={this.state.reviewText} onChange={this.handleTextChange} />
                        </ModalBody>
                        <ModalFooter>
                            <div className="button add_review" onClick={this.handleAddReview}>Add</div>
                            <div className="button cancel_add_review" onClick={this.closeReviewModal}>Cancel</div>
                        </ModalFooter>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(state => state)(AddReviewButton);
