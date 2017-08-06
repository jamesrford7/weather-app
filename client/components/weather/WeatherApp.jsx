import React from 'react';
import WeatherGrid from './grid/WeatherGrid.jsx'
import CityDropDown from './dropdowns/CityDropDown.jsx';
import CityHeader from './headers/CityHeader.jsx';
import { convertToDto } from '../../utilities/dto';
import { urlBuilder } from '../../utilities/urlBuilder';

const config = require('../../config/config');

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.cities = {
      data: config.cities,
      callback: this.changeCity.bind(this)
    };

    this.state = {
      dto: null,
      cities: this.cities
    };
  }

  changeCity(city) {
    fetch(urlBuilder(city),
    {
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then(res => {
        this.setState(
          {
            dto: convertToDto(res)
          }
        );
      });
  }

  componentDidMount() {
    this.changeCity(this.cities.data[0].code);
  }

  render() {

    if(this.state.dto != null) {
      return(
        <div>
          <CityHeader cityName={this.state.dto.cityName} />
          <WeatherGrid weatherRows={this.state.dto.weatherRows} />
          Change City: <CityDropDown cities={this.cities} />
        </div>
      );
    }

    else {
      return (
        <div>Loading...</div>
      );
    }
  }
}
