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
            clicks: 0,
            showAdd: true,
            showAlertModal: false
        };
        this.closeAlertModal = this.closeAlertModal.bind(this);
    }
    incrementItem = () => {      
        this.setState({ clicks: this.state.clicks + 1 });
        this.props.dispatch(incrementItem(this.props.foodid));
    }
    decreaseItem = () => {
        if (this.state.clicks === 1) {
            this.setState({ showAdd: true });
            this.props.dispatch(removeItem(this.props.foodid));
        } else {
            this.props.dispatch(decrementItem(this.props.foodid));
        }
        this.setState({ clicks: this.state.clicks - 1 });

    }
    handleAddClick = () => {
        if (this.props.userReducer.activeUser === "") {
            this.setState({ showAlertModal: true });
        } else {
            this.setState({ clicks: this.state.clicks + 1 });
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
    componentWillMount() {
        this.props.itemReducer.items.map((item) => {
            if (item.foodid === this.props.foodid) {
                this.setState({ clicks: parseInt(item.count) });
                if (parseInt(item.count) > 0) {
                    this.setState({ showAdd: false });
                }
            }
        });
    }
   
    closeAlertModal() {
        this.setState({ showAlertModal: false });
    }
    render() {
        return (
            <div className="add_button_div">
                {!this.state.showAdd ?
                    <div className="add_counter_div">
                        <div className="inc_dec_div" onClick={this.decreaseItem}>-</div>
                        <div className="count_div"><h5>{this.state.clicks}</h5></div>
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
