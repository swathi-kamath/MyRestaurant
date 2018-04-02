import React, { Component } from 'react';
import { connect } from 'react-redux';

class Items extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
          {this.props.count}
          </h1>
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.itemReducer,
  };
}
export default connect(mapStateToProps)(Items);