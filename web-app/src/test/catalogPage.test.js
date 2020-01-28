import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {displayItems} from '../pages/catalogPage';
import { NavItem } from 'reactstrap';


it('simulates click events', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<displayItems onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.mock.calls.length).toEqual(1);
});