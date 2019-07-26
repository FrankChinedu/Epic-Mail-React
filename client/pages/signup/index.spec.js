import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './index';

describe('Sign up', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Signup />);

    expect(component).toMatchSnapshot();
  });
});
