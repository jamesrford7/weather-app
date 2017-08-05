import React from 'react';

export default function TimeAndTempCell(props) {
  return(<span>{props.time} -> {props.temp} deg</span>);
}
