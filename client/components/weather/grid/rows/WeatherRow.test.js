import React from 'react';
import { shallow } from 'enzyme';
import WeatherRow from './WeatherRow';

describe('WeatherRow', () => {
  let sut;

  const timeAndTemps = [
    {dt: 1234, time: '9AM', temp: '15'},
    {dt: 3213, time: '12AM', temp: '12'},
    {dt: 3634, time: '3PM', temp: '22'}
  ];

  const date = {
    day: 'Mon',
    month: 'Sept',
    date: '3'
  };

  beforeAll(() => {
    sut = shallow(<WeatherRow date={date} timeAndTemps={timeAndTemps} />);
  });

  it('should contain a DateCell', () => {
    expect(sut.find('DateCell').length).toEqual(1);
  });

  it('should set the correct values in the DateCell', () => {
    const dateCellProps = sut.find('DateCell').props();
    expect(dateCellProps.day).toEqual('Mon');
    expect(dateCellProps.month).toEqual('Sept');
    expect(dateCellProps.date).toEqual('3');
  });

  it('should create the correct amount of TimeAndTempCells', () => {
    expect(sut.find('TimeAndTempCell').length).toEqual(3);
  });

  it('should correctly populate the TimeAndTempCells', () => {
    const timeAndTempNodes = sut.find('TimeAndTempCell').nodes;
    expect(timeAndTempNodes[0].props.time).toEqual('9AM');
    expect(timeAndTempNodes[0].props.temp).toEqual('15');
    expect(timeAndTempNodes[1].props.time).toEqual('12AM');
    expect(timeAndTempNodes[1].props.temp).toEqual('12');
    expect(timeAndTempNodes[2].props.time).toEqual('3PM');
    expect(timeAndTempNodes[2].props.temp).toEqual('22');
  });
});
