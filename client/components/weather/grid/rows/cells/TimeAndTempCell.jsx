import React from 'react';

export default function TimeAndTempCell(props) {
  return(
    <td>
      <span>{props.time}<br />
      <img src={props.icon} /><br /> {props.temp}{String.fromCharCode(176)}</span>
    </td>
  );
}
