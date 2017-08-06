import React from 'react';
import WeatherRow from './rows/WeatherRow.jsx';

export default function WeatherGrid(props) {
  const weatherRows = props.weatherRows.map((weatherRow) => {
    return <WeatherRow key={weatherRow.id} timeAndTemps={weatherRow.timeAndTemps} date={weatherRow.date} />
  });

  return (
    <table>
      <tbody>
        {weatherRows}
      </tbody>
    </table>
  );
}
