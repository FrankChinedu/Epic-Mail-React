import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

describe('Navbar', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navbar debug />);

    expect(component).toMatchSnapshot();
  });
});