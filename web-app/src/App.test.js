import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import { NavItem } from 'reactstrap';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('renders an `.App-logo`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('App-logo')).to.have.lengthOf(1);
  });

  it('renders four <NavItem/> components', () => {
    const wrapper = shallow(<App />);
    const nbItem = wrapper.find(NavItem);
    expect(nbItem).to.have.lengthOf(4);
  });
});

/*
Test to implement:
- Testing of the page rendering:
  - Cards and Images well rendered
- Methods Testing:
  - Selected items well added to cart
  - Removed items, well removed
  - Total price well computed
- Events
  - Check onClick events triggers good methods
  

*/