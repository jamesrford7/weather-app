import React from 'react';
import CityHeader from './weather/headers/CityHeader.jsx';
import DateCell from './weather/grid/rows/cells/DateCell.jsx';
import TimeAndTempCell from './weather/grid/rows/cells/TimeAndTempCell.jsx';
import WeatherRow from './weather/grid/rows/WeatherRow.jsx';
import CityDropDown from './weather/dropdowns/CityDropDown.jsx';
import WeatherGrid from './weather/grid/WeatherGrid.jsx';

export default class App extends React.Component {
  render() {
    const timeAndTemps = [
      {dt: 1234, time: '9AM', temp: '15'},
      {dt: 3213, time: '12AM', temp: '12'},
      {dt: 3634, time: '3PM', temp: '22'}
    ];
    const cities = [
      {key: 1, name: 'Leeds'},
      {key: 2, name: 'Manchester'},
      {key: 3, name: 'London'},
      {key: 4, name: 'Liverpool'}];
    const weatherRows = [
      {
        id: 1,
        date: {
          day: 'Mon', month: 'Aug', date: '07'
        },
        timeAndTemps: [
          {dt: 1234, time: '9AM', temp: '15', icon: '10d'},
          {dt: 3213, time: '12AM', temp: '12', icon: '20d'},
          {dt: 3634, time: '3PM', temp: '22', icon: '30d'}
        ]
      },
      {
        id: 2,
        date: {
          day: 'Tues', month: 'Aug', date: '08'
        },
        timeAndTemps: [
          {dt: 8789, time: '9AM', temp: '22', icon: '40d'},
          {dt: 8732, time: '12AM', temp: '32', icon: '50d'},
          {dt: 9877, time: '3PM', temp: '2', icon: '60d'}
        ]
      }
    ];

    return (
      <div style={{textAlign: 'center'}}>
        <WeatherGrid weatherRows={weatherRows} />
      </div>);
  }
}
