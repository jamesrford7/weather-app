import React from 'react';
import CityHeader from './CityHeader.jsx';
import DateCell from './DateCell.jsx';
import TimeAndTempCell from './TimeAndTempCell.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <CityHeader cityName='Leeds' />
        <DateCell day='Mon' month='Aug' date='2' />
        <TimeAndTempCell time='9AM' temp='34' />
      </div>);
  }
}
