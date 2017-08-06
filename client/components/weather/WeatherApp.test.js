import React from 'react';
import { shallow } from 'enzyme';
import WeatherApp from './WeatherApp';

describe('WeatherApp', () => {
  let sut;

  const dto = {
    weatherRows: [
      {
        id: 1,
        date: 'Sat Dec 15 2007',
        timeAndTemps: [
          {dt: 1234, time: '9AM', temp: '15'},
          {dt: 3213, time: '12AM', temp: '12'},
          {dt: 3634, time: '3PM', temp: '22'}
        ]
      },
      {
        id: 2,
        date: 'Sun Dec 16 2007',
        timeAndTemps: [
          {dt: 8789, time: '9AM', temp: '22'},
          {dt: 8732, time: '12AM', temp: '32'},
          {dt: 9877, time: '3PM', temp: '2'}
        ]
      }
    ]
  };

  const cities = {
    data: [
      {key: 1, name: 'Leeds'},
      {key: 2, name: 'Manchester'},
      {key: 3, name: 'London'},
      {key: 4, name: 'Liverpool'}
    ],
    callback: () => {}
  };

  beforeAll(() => {
    sut = shallow(<WeatherApp weatherGrid={dto} cities={cities} cityName={cities[0]}/>);
    sut.setState({
      dto: dto
    });
  });

  it('should have a CityHeader', () => {
    expect(sut.find('CityDropDown').length).toEqual(1);
  });

  it('should have a WeatherGrid', () => {
    expect(sut.find('WeatherGrid').length).toEqual(1);
  });

  it('should have a CityHeader', () => {
    expect(sut.find('CityHeader').length).toEqual(1);
  });
});
