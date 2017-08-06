import React from 'react';
import CityHeader from './weather/headers/CityHeader.jsx';
import DateCell from './weather/rows/cells/DateCell.jsx';
import TimeAndTempCell from './weather/rows/cells/TimeAndTempCell.jsx';
import WeatherRow from './weather/rows/WeatherRow.jsx';

export default class App extends React.Component {
  render() {
    const timeAndTemps = [
      {dt: 1234, time: '9AM', temp: '15'},
      {dt: 3213, time: '12AM', temp: '12'},
      {dt: 3634, time: '3PM', temp: '22'}
    ];
    return (
      <div style={{textAlign: 'center'}}>
        <CityHeader cityName='Leeds' />
        <DateCell day='Mon' month='Aug' date='2' />
        <TimeAndTempCell time='9AM' temp='34' />
        <WeatherRow day='Mon' month='Sept' date='3' timeAndTemps={timeAndTemps} />
      </div>);
  }
}
