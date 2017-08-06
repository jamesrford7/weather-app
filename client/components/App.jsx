import React from 'react';
import CityHeader from './weather/headers/CityHeader.jsx';
import WeatherApp from './weather/WeatherApp.jsx';
import { convertToDto } from '../utilities/dto';

const data = require('../mock-data/mock-data.json');

export default class App extends React.Component {
  render() {

    const icon = 'http://openweathermap.org/img/w/01d.png';

    const weatherGrid = convertToDto(data);

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
