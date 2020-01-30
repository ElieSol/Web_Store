import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { create } from "react-test-renderer";
import { expect } from 'chai';

import {CatalogPage} from '../pages/CatalogPage';
import { NavItem } from 'reactstrap';

import {mockInventory, Basket} from '../Objects.js';


let props;
beforeEach(() => {
    props = {
        cart: new Basket([],0,"Bob"),
        inventory: mockInventory.inventoryList,
    };
});

test('display all items to display', () => {
    const component = create(<CatalogPage  cart={props.cart} inventory={props.inventory}/>);
    const instance = component.root;
    const button = instance.findByType("button").at(0);
    button.props.onClick();

});

it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(<CatalogPage/>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.mock.calls.length).toEqual(1);
});

it('display all the items avalaible', () => {
    const wrapper = mount(<CatalogPage  cart={props.cart} inventory={props.inventory}/>);
    expect(wrapper.find("CardText").to.have.length(6));
});

it('increments the number of items in cart', () => {
    const wrapper = mount(<CatalogPage cart={props.cart} inventory={props.inventory}/>);
    wrapper
      .find('button').at(0)
      .simulate('click')
    expect(this.state.cart.getTotalNumberOfItem()).toBe(1);
});

/*
  it('decrements the counter', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toBe('-1');
  });
});
*/