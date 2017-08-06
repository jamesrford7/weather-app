import React from 'react';

export default function DateCell(props) {
  return(
    <td>{props.day} {props.month} {props.date}</td>
  );
}
