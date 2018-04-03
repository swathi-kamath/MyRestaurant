import React, { Component } from 'react';

import {Tab, MenuItem, Row, Col, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Home from '../home/home-component';
import FoodDisplay from '../food/food-display';
import "./tabs.css"
class TabList extends Component {
    render() {
        return (
            <div className="">
                <Tab.Container id="menu-tab" defaultActiveKey="home">
                    <Row className="clearfix">
                        <Col sm={12} >
                            <Nav bsStyle="tabs"  >
                                <NavItem eventKey="home" className="w3-mobile">Home</NavItem>                              
                                <NavDropdown eventKey="food" title="Food" id="nav-dropdown-within-tab" className="w3-mobile">
                                    <MenuItem eventKey="soups">Soups</MenuItem>
                                    <MenuItem eventKey="salads">Salads</MenuItem>
                                    <MenuItem eventKey="desserts">Desserts</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey="review" className="w3-mobile">Reviews</NavItem>
                                <NavItem eventKey="recipe" className="w3-mobile">Recipes</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="home"><Home /></Tab.Pane>
                                <Tab.Pane eventKey="soups"><FoodDisplay category="soups"/></Tab.Pane>
                                <Tab.Pane eventKey="salads"><FoodDisplay category="salads"/></Tab.Pane>
                                <Tab.Pane eventKey="desserts"><FoodDisplay category="desserts"/></Tab.Pane>
                                <Tab.Pane eventKey="review">Reviews</Tab.Pane>
                                <Tab.Pane eventKey="recipe">Recipes</Tab.Pane>
                            </Tab.Content>
                        </Col>


                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default TabList;