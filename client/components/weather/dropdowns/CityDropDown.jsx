import React from 'react';

export default function CityDropDown(props){
  const optionList = props.cities.map((city) => {
    return <option key={city.key} value={city.name}>{city.name}</option>
  });

  return(
    <select>
      {optionList}
    </select>
  );
}
