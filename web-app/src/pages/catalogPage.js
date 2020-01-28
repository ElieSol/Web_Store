import React, { useState } from 'react';
import '../stylesheets/catalogPage.css';

import { Table, TabContent, TabPane, Navbar, Nav, NavItem, NavLink, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import classnames from 'classnames';


function addItemToCart(cart, item){
    cart.addItem(item);
}



function displayItems(listOfItems, cart){
    var element = [];
    for(let i=0; i<listOfItems.length; i++){
        var imagePath = require('../'+'img'+listOfItems[i].image);
        element.push(
            <div className="grid-item" key={i}>
            <Card body inverse style={{ backgroundColor: 'cadetblue', borderColor: 'grey' }}>
                <CardImg width="10%" src={imagePath} alt="Card image cap" />
                <CardBody>
                    <CardTitle><p className="item-highlights"> {listOfItems[i].name}</p> </CardTitle>
                    <CardSubtitle>
                        <p className="item-highlights"> {listOfItems[i].price} € </p>
                    </CardSubtitle>
                    <CardText>
                        {listOfItems[i].description}
                        <br/>
                        Reference: {listOfItems[i].reference}
                    </CardText>
                    <Button onClick={() => addItemToCart(cart, listOfItems[i])}>Add to Cart</Button>
                </CardBody>
            </Card>
            </div>
            )
    }
    return element;
}

export{displayItems};