import React from 'react';
import CityHeader from './weather/headers/CityHeader.jsx';
import WeatherApp from './weather/WeatherApp.jsx';
import { convertToDto } from '../utilities/dto';
import { urlBuilder } from '../utilities/urlBuilder';

const data = require('../mock-data/mock-data.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    };
  }

  componentDidMount() {
    fetch(urlBuilder('London,uk'),
    {
      method: 'get'
    }
  ).then((res) => {
    return res.json();
  }).then(res => {
      console.log(res);
      console.log(this.state);
      this.setState(
        {
          forecast: convertToDto(res)
        }
      );
    });
  }

  render() {

    const icon = 'http://openweathermap.org/img/w/01d.png';

    const weatherGrid = convertToDto(data);

    const cities = [
      {key: 1, name: 'Leeds'},
      {key: 2, name: 'Manchester'},
      {key: 3, name: 'London'},
      {key: 4, name: 'Liverpool'}
    ];

    if(this.state.forecast != null) {
      return (
        <div style={{textAlign: 'center'}}>
          <WeatherApp weatherGrid={this.state.forecast} cities={cities} cityName={cities[1].name}/>
        </div>);
      }
    else {
      return (<div>Loading</div>)
    }
  }
}
