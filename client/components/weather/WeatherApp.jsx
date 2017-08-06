import React from 'react';
import WeatherGrid from './grid/WeatherGrid.jsx'
import CityDropDown from './dropdowns/CityDropDown.jsx';
import CityHeader from './headers/CityHeader.jsx';

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CityHeader cityName={this.props.cityName} />
        <WeatherGrid weatherRows={this.props.weatherGrid.weatherRows} />
        <CityDropDown cities={this.props.cities} />
      </div>
    );
  }
}
