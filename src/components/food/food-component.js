import React, { Component } from 'react';
import {connect} from 'react-redux';

class Food extends Component {
render() {
    return (
      <div className="Food">
       <h1> This is Food Component</h1>
       <h1> {this.props.itemReducer}</h1>
      </div>
    );
  }
}

export default connect(state => state)(Food);
