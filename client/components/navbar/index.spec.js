import React from 'react';
import { shallow } from 'enzyme';
import { NavbarComponent } from './index';

describe('Navbar', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NavbarComponent debug />);

    expect(component).toMatchSnapshot();
  });
});
