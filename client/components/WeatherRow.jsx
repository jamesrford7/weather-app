import React from 'react';
import DateCell from './DateCell.jsx';
import TimeAndTempCell from './TimeAndTempCell.jsx';

export default function WeatherRow(props){
  const timeAndTemps = props.timeAndTemps.map((timeAndTemp) => {
    return <TimeAndTempCell key={timeAndTemp.dt} time={timeAndTemp.time} temp={timeAndTemp.temp} />
  });

  return(
    <div>
      <DateCell day={props.day} month={props.month} date={props.date} />
      {timeAndTemps}
    </div>
  );
}
