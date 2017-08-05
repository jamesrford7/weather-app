import React from 'react';
import CityHeader from './CityHeader.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <CityHeader cityName='Leeds' />
      </div>);
  }
}
