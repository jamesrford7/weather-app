import React from 'react';

export default class CityDropDown extends React.Component{

  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.cities.callback(e.target.value);
  }

  render() {
    const optionList = this.props.cities.data.map((city) => {
      return <option key={city.key} value={city.code} >{city.name}</option>
    });

    return(
      <select onChange={this.onChangeHandler}>
        {optionList}
      </select>
    );
  }
}
