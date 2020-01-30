/*
Author: Julie Solacroup
Last modified: 30/01/19

    Script containing the implementation of the CatalogPage component of the web app
    It renders the items avalaible in store.

*/

import React, { useState } from 'react';
import '../stylesheets/catalogPage.css';

import { Table, TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';


export class CatalogPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cart: this.props.cart,
            inventory: this.props.inventory,
        }
    }

    addItemToCart(cart, item){
        cart.addItem(item);
    }

    displayItems(inventory, cart){
    var element = [];
    for(let i=0; i<inventory.length; i++){
        var imagePath = require('../'+'img'+inventory[i].image);
        element.push(
            <div className="grid-item" key={i}>
            <Card body inverse style={{ backgroundColor: 'cadetblue', borderColor: 'grey' }}>
                <CardImg width="10%" src={imagePath} alt="Card image cap" />
                <CardBody>
                    <CardTitle><p className="item-highlights"> {inventory[i].name}</p> </CardTitle>
                    <CardSubtitle>
                        <p className="item-highlights"> {inventory[i].price} € </p>
                    </CardSubtitle>
                    <CardText>
                        {inventory[i].description}
                        <br/>
                        Reference: {inventory[i].reference}
                    </CardText>
                    <Button onClick={() => this.addItemToCart(cart, inventory[i])}>Add to Cart</Button>
                </CardBody>
            </Card>
            </div>
            )
    }
    return element;
    }

    render(){

        return(
            <div id="grid-container-catalog">{this.displayItems(this.state.inventory, this.state.cart)}</div>
        )
    }

}

export default CatalogPage;