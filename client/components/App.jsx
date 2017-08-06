import React from 'react';
import CityHeader from './weather/headers/CityHeader.jsx';
import WeatherApp from './weather/WeatherApp.jsx';

export default class App extends React.Component {
  render() {

    const icon = 'http://openweathermap.org/img/w/01d.png';

    const weatherGrid = {
      weatherRows: [
        {
          id: 1,
          date: 'Sat Dec 15 2007',
          timeAndTemps: [
            {dt: 1234, time: '9AM', temp: '15', icon: icon},
            {dt: 3213, time: '12AM', temp: '12', icon: icon},
            {dt: 3634, time: '3PM', temp: '22', icon: icon}
          ]
        },
        {
          id: 2,
          date: 'Sat Dec 16 2007',
          timeAndTemps: [
            {dt: 8789, time: '9AM', temp: '22', icon: icon},
            {dt: 8732, time: '12AM', temp: '32', icon: icon},
            {dt: 9877, time: '3PM', temp: '2', icon: icon}
          ]
        }
      ]
    };

    const cities = [
      {key: 1, name: 'Leeds'},
      {key: 2, name: 'Manchester'},
      {key: 3, name: 'London'},
      {key: 4, name: 'Liverpool'}
    ];

    return (
      <div style={{textAlign: 'center'}}>
        <WeatherApp weatherGrid={weatherGrid} cities={cities} cityName={cities[1].name}/>
      </div>);
  }
}
