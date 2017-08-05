import React from 'react';
import { shallow } from 'enzyme';
import WeatherRow from './WeatherRow';

const sut = shallow(<WeatherRow day='Mon' month='Sept' date='3' />);

describe('WeatherRow', () => {
  it('should contain a DateCell', () => {
    expect(sut.find('DateCell').length).toEqual(1);
  });

  it('should set the correct values in the DateCell', () => {
    const dataCellProps = sut.find('DateCell').props();
    expect(dataCellProps.day).toEqual('Mon');
    expect(dataCellProps.month).toEqual('Sept');
    expect(dataCellProps.date).toEqual('3');
  });
});
