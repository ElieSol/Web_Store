import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import { NavItem } from 'reactstrap';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('renders four <NavItem/> components', () => {
    const wrapper = shallow(<App />);
    const nbItem = wrapper.find(NavItem);
    expect(nbItem).to.have.lengthOf(4);
  });





/*
Test to implement:
- Testing of the page rendering:
  - Cards and Images well rendered
- Methods Testing:
  - Selected items well added to cart
  - Removed items, well removed
  - Total price well computed
*/