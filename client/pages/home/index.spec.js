import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from './index';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<HomeComponent debug />);

    expect(component).toMatchSnapshot();
  });
});
