import React from 'react';
import { shallow } from 'enzyme';
import TimeAndTempCell from './TimeAndTempCell';

describe('TimeAndTempCell', () => {
  let sut;

  beforeAll(() => {
    sut = shallow(<TimeAndTempCell time='9AM' temp='12' icon='10d'/>);
  });

  it('should display the correct time and temperature', () => {
    expect(sut.find('span').text()).toEqual('9AM -> 12 deg');
  });

  it('should display the correct icon', () => {
    expect(sut.find('img').props().src).toEqual('10d');
  });
});
