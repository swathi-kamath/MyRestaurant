import React, { Component } from 'react';
import './fooditem.css';
import { connect } from 'react-redux';
import { addItem, decrementItem, incrementItem, removeItem } from '../../actions';
import { ModalHeader, ModalBody, ModalTitle } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal';
class AddItemButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlertModal: false
        };
        this.closeAlertModal = this.closeAlertModal.bind(this);
        this.getCount=this.getCount.bind(this);
    }
    incrementItem = () => {      
        this.props.dispatch(incrementItem(this.props.foodid));
    }
    decreaseItem = () => {
        if (this.getCount(this.props.itemReducer.items) === 1) {
            this.props.dispatch(removeItem(this.props.foodid));
        } else {
            this.props.dispatch(decrementItem(this.props.foodid));
        }
    }
    handleAddClick = () => {
        if (this.props.userReducer.activeUser === "") {
            this.setState({ showAlertModal: true });
        } else {
            this.setState({ showAdd: false });
            this.props.dispatch(addItem({
                foodid: this.props.foodid,
                name: this.props.name,
                cost: this.props.cost,
                count: 1,
                type: this.props.type
            }));
        }
    }
    getCount(items){
        let count=0;
        items.map((item) => {
            if (item.foodid === this.props.foodid) {
                count = parseInt(item.count);
            }
        });
        return count;
    }
       
    closeAlertModal() {
        this.setState({ showAlertModal: false });
    }
    render() {
        return (
            <div className="add_button_div">
                {this.getCount(this.props.itemReducer.items)>0 ?
                    <div className="add_counter_div">
                        <div className="inc_dec_div" onClick={this.decreaseItem}>-</div>
                        <div className="count_div"><h5>{this.getCount(this.props.itemReducer.items)}</h5></div>
                        <div className="inc_dec_div" onClick={this.incrementItem}>+</div>
                    </div>
                    : <div className="add_text_div" onClick={this.handleAddClick}><h5>Add</h5></div>
                }
                <Modal backdrop={'static'} show={this.state.showAlertModal} keyboard={false} dialogClassName="alertModal"
                    onHide={this.closeAlertModal}>
                    <div>
                        <ModalHeader closeButton={true} >
                            <ModalTitle> Alert </ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <h4> Please Sign in to Add items to your bag ! </h4>
                        </ModalBody>
                    </div>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    state.items.map((item) => {
        if (item.foodid === this.props.foodid) {
            this.setState({ clicks: parseInt(item.count) });
            if (parseInt(item.count) > 0) {
                this.setState({ showAdd: false });
            }
        }
    });
  }
  
export default connect(state => state)(AddItemButton);
