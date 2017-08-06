import React from 'react';
import { shallow } from 'enzyme';
import DateCell from './DateCell';

describe('DateCell', () => {
  it('should display the correct date', () => {
    const dateCell = shallow(<DateCell day='Sun' month='Aug' date='06' />);
    expect(dateCell.find('span').text()).toBe('Sun Aug 06');
  });
});
