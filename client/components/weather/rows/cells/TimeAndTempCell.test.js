import React from 'react';
import { shallow } from 'enzyme';
import TimeAndTempCell from './TimeAndTempCell';

describe('TimeAndTempCell', () => {
  it('should display the correct time and temperature', () => {
    const timeAndTempCell = shallow(<TimeAndTempCell time='9AM' temp='12' />);
    expect(timeAndTempCell.find('span').text()).toEqual('9AM -> 12 deg');
  });
});
