import React, { Component } from 'react';
import './fooditem.css';
import { connect } from 'react-redux';
import { addItem} from '../../actions'
class AddItemButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            showAdd: true
        };
    }
    incrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        this.props.dispatch(addItem( {
            "foodid":this.props.foodid,
            "name": this.props.name,
            "cost":this.props.cost,
        }));        
    }
    decreaseItem = () => {
        if(this.state.clicks===1){
            this.setState({ showAdd:true });  
        }
        this.setState({ clicks: this.state.clicks - 1 });
       
    }
    handleAddClick = () => {
        this.setState({ clicks: this.state.clicks + 1 }); 
        this.setState({ showAdd:false });
        this.props.dispatch(addItem( {
            foodid:this.props.foodid,
            name: this.props.name,
            cost:this.props.cost,
        }));  
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
                :  <div className="add_text_div" onClick={this.handleAddClick}><h5>Add</h5></div>        
            }
            </div>
        );
    }
}
export default connect(state => state)(AddItemButton);
