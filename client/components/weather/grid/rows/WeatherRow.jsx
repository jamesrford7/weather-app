import React from 'react';
import DateCell from './cells/DateCell.jsx';
import TimeAndTempCell from './cells/TimeAndTempCell.jsx';

export default function WeatherRow(props){
  const timeAndTemps = props.timeAndTemps.map((timeAndTemp) => {
    return <TimeAndTempCell key={timeAndTemp.dt} time={timeAndTemp.time} temp={timeAndTemp.temp} icon={timeAndTemp.icon}/>
  });

  return(
    <tr>
      <DateCell date={props.date} />
      {timeAndTemps}
    </tr>
  );
}
