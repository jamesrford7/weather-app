import React from 'react';
import DateCell from './cells/DateCell.jsx';
import TimeAndTempCell from './cells/TimeAndTempCell.jsx';

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
