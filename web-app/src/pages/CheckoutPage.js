/*
Author: Julie Solacroup
Last modified: 30/01/19

    Script containing the implementation of the CheckoutPage component of the web app
    It allows the display of the selected items and the checkout/simulation of payment.

*/

import React, { useState } from 'react';
import '../stylesheets/checkoutPage.css';

import { Button, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


export class CheckoutPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cart: this.props.cart,
            price: 0,
            checkout: false,
            modal: false
        }

        this.deleteItemFromCart = this.deleteItemFromCart.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({
            cart: props.cart
        })
    }

    displayCartContent(cart){
        var element = [];

        var cartItemList = cart.listOfItems;

        for(let i = 0; i < cartItemList.length ; i++){
            var item = cartItemList[i];
            var imagePath = require('../'+'img'+item.image);
            element.push(
                <div className="grid-item-checkout" key={i}>
                <Row>
                    <Col xs="3" sm={{offset:1}}><img width="50%" src={imagePath} alt="Card image cap"/></Col>
                    <Col xs="6">
                        <Row>{item.name}</Row>
                        <Row>Price: {item.price} €<br/>
                            Reference: {item.reference}</Row>
                        {/*<Row>Quantity: </Row>*/}
                        <Row><Button onClick={() => this.deleteItemFromCart(i)}>Remove</Button></Row>
                    </Col>
                </Row>
                </div>
            )            
        }
        
        return element;
    }

    deleteItemFromCart(idx){
        const cart = this.state.cart;
        var item = cart.listOfItems[idx];
        item.deletedFromCart();
        cart.listOfItems.splice(idx,1);
        this.setState({
            cart: cart,
            price: cart.getTotalPrice()
        })
    }

    toggle = () => {
        this.setState({
              modal: !this.state.modal,
        })
    }

    render(){
        var reinitialization = this.props.reinitialization;
        return(
            <div>
                {this.state.cart.getTotalNumberOfItem()!=0 ? this.displayCartContent(this.state.cart) : <p id="no-display">Nothing in the cart to display.</p>}
                <p id="price">Total Price : {this.state.cart.getTotalPrice()} €</p>
                <p className="text-center">Number of Items : {this.state.cart.getTotalNumberOfItem()} </p>
                <div className="text-center" id="checkout-button">{this.state.cart.getTotalNumberOfItem()!=0 ? (<Button onClick={() => this.toggle()} id="checkout-button">Proceed to Checkout</Button>): <Button id="checkout-button" disabled>Proceed to Checkout</Button>}</div>
                <Modal isOpen={this.state.modal} toggle={()=>this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>Checkout</ModalHeader>
                    <ModalBody>
                        Are you sure you want to pursue with your checkout ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>{reinitialization(); this.toggle()}}>Yes</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>                   
        )
    }

}


export default CheckoutPage;