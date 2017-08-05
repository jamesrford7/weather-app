import React from 'react';
import { shallow } from 'enzyme';
import CityHeader from './CityHeader';

describe('City Header', () => {
  it('should display the correct city name', () => {
    const cityHeader = shallow(<CityHeader cityName='Manchester' />);
    expect(cityHeader.find('h3').text()).toEqual('Manchester');
  });
})
