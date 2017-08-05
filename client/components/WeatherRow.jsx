import React from 'react';
import DateCell from './DateCell.jsx';

export default function WeatherRow(props){
  return(
    <DateCell day={props.day} month={props.month} date={props.date} />
  );
}
