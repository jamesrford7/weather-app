import React from 'react';
import { shallow } from 'enzyme';
import CityDropDown from './CityDropDown';

describe('CityDropDown', () => {
  let sut;

  const cities = [
    {key: 1, name: 'Leeds'},
    {key: 2, name: 'Manchester'},
    {key: 3, name: 'London'},
    {key: 4, name: 'Liverpool'}
  ];

  beforeAll(() => {
    sut = shallow(<CityDropDown cities={cities} />);
  });

  it('Should have the correct number of cities', () => {
    expect(sut.find('option').length).toEqual(4);
  });
});
