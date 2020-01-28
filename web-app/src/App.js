import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Table, TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import {displayItems} from './pages/catalogPage';
import {CheckoutPage} from './pages/CheckoutPage';

import {mockInventory, Basket} from './Objects';


class App extends Component {

    constructor(props){
      super();
      
      this.state = {
        activeTab: "1", 
        cart: new Basket([],0,"Bob"),
        reinitCart: false
      }

      this.reinitialization = this.reinitialization.bind(this)      
    }

    reinitialization(){
      this.setState({
        reinitCart: true,
        activeTab: "1", 
        cart: new Basket([], 0, "Bob"),
      })
    }
    
    toggle = (tab) => {
      if(this.activeTab !== tab){
        this.setState({
          activeTab: tab,
        })
      }
    } 

    render(){
      var reinitialization = this.reinitialization;

      return ( 
      <div class = "App" >
        <header class = "App-header" >

        <div id="title">
        <img src = { logo } class = "App-logo" alt = "logo" />
        <p> Cyber Store </p> 
        </div>
        
        <div id="nav-menu">
        <Navbar color="faded" light expand="md">
        <Nav className="mr-auto" tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1');}}>
              About us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2');}}>
              Catalog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3');}}>
             Cart
            </NavLink>
          </NavItem>
          <NavItem>
           <NavLink>
              Help
            </NavLink>
          </NavItem>
        </Nav>
        </Navbar>
        </div>
        </header>

        <body class="bodyContent">
        <TabContent activeTab={this.state.activeTab} className="content">
            <TabPane tabId="1">
              <div id="about">
                This application was developped for a Technical Test.<br/>
                It simulates a store selling cyber equipements.<br/>
                
              </div>
            </TabPane>
        </TabContent>

        <TabContent activeTab={this.state.activeTab} className="content">
            <TabPane tabId="2">
            <div id="grid-container-catalog">{displayItems(mockInventory.inventoryList, this.state.cart)}</div>
            </TabPane>
        </TabContent>


        <TabContent activeTab={this.state.activeTab} className="content">
            <TabPane tabId="3">
            <div id="grid-container-cart"><CheckoutPage cart={this.state.cart} reinitialization = {reinitialization.bind(this)}/></div>
            </TabPane>
        </TabContent>

        <TabContent>

        </TabContent>

        

        </body>

        <footer className="App-footer">
         <p>Application powered by <code>ReactJS</code></p>
        </footer> 
        </div>
      );

    }
    
}

export default App;