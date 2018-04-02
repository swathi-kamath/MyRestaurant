import React, { Component } from 'react';
import './App.css';
import Header from './header/header-component';
import TabList from './tabs/tabs-component';
class App extends Component {
  render() {    
    return (
      <div className="App">
       <Header />
       <TabList />
      </div>
    );
  }
}
export default App;
