import React from 'react';
import { shallow } from 'enzyme';
import WeatherGrid from './WeatherGrid';

describe('WeatherGrid', () => {
  let sut;

  const weatherRows = [
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
  ];

  beforeAll(() => {
    sut = shallow(<WeatherGrid weatherRows={weatherRows} />);
  });

  it('should have the correct number of WeatherRows', () => {
    expect(sut.find('WeatherRow').length).toEqual(2);
  });
});
