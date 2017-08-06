import React from 'react';

export default function TimeAndTempCell(props) {
  return(
    <div>
      <span>{props.time} -> {props.temp} deg</span>
      <img src={props.icon} />
    </div>
  );
}
