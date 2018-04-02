import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions';
import logo from '../header/logo.png';
import './home.css';

class Home extends Component {
    
  render() {
    return (
      <div className="home">
      <h2>Kamath's Restaurant</h2>
      <h4>Come, experience authentic European-style craft brews, hand-crafted innovative cocktails, discover world cuisines, and relish innovative desserts all under one roof. We invite you to "Unbelieve"!</h4>
      </div>
    );
  }
}

export default connect(state => state)(Home);
