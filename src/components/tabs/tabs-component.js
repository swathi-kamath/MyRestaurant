import React, { Component } from 'react';

import {Tab, MenuItem, Row, Col, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Home from '../home/home-component';
import Food from '../food/food-component';
import "./tabs.css"
class TabList extends Component {
    render() {
        return (
            <div className="">
                <Tab.Container id="left-tabs-example" defaultActiveKey="home">
                    <Row className="clearfix">
                        <Col sm={12}>
                            <Nav bsStyle="tabs">
                                <NavItem eventKey="home">Home</NavItem>                              
                                <NavDropdown eventKey="food" title="Food" id="nav-dropdown-within-tab">
                                    <MenuItem eventKey="soup">Soups</MenuItem>
                                    <MenuItem eventKey="dessert">Desserts</MenuItem>
                                    <MenuItem eventKey="beverage">Beverages</MenuItem>
                                </NavDropdown>
                                <NavItem eventKey="review">Reviews</NavItem>
                                <NavItem eventKey="recipe">Recipes</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="home"><Home /></Tab.Pane>
                                <Tab.Pane eventKey="soup">Soups</Tab.Pane>
                                <Tab.Pane eventKey="dessert">Desserts</Tab.Pane>
                                <Tab.Pane eventKey="beverage">Beverages</Tab.Pane>
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