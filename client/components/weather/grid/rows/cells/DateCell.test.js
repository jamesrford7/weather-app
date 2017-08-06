import React from 'react';
import { shallow } from 'enzyme';
import DateCell from './DateCell';

describe('DateCell', () => {
  it('should display the correct date', () => {
    const dateCell = shallow(<DateCell date='Sat Dec 15 2007' />);
    expect(dateCell.find('td').text()).toBe('Sat Dec 15 2007');
  });
});
