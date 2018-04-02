import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { bindActionCreators } from 'redux';

class AddItem extends Component {
  constructor(props) {
        super(props);
   }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();this.props.dispatch(addItem())}}>
                      Add
                  </button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addItem, dispatch) }
}
export default connect(mapDispatchToProps)(AddItem);