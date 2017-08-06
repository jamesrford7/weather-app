import React from 'react';
import WeatherGrid from './grid/WeatherGrid.jsx'
import CityDropDown from './dropdowns/CityDropDown.jsx';
import CityHeader from './headers/CityHeader.jsx';
import { convertToDto } from '../../utilities/dto';
import { urlBuilder } from '../../utilities/urlBuilder';

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dto: null
    };
  }

  componentDidMount() {
    fetch(urlBuilder('London,uk'),
    {
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then(res => {
        console.log(res);
        console.log(this.state);
        this.setState(
          {
            dto: convertToDto(res)
          }
        );
      });
  }

  render() {

    const cities = [
      {key: 1, name: 'Leeds'},
      {key: 2, name: 'Manchester'},
      {key: 3, name: 'London'},
      {key: 4, name: 'Liverpool'}
    ];

    if(this.state.dto != null) {
      return(
        <div>
          <CityHeader cityName={this.state.dto.cityName} />
          <WeatherGrid weatherRows={this.state.dto.weatherRows} />
          <CityDropDown cities={cities} />
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
