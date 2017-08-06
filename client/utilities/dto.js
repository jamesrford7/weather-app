const config = require('../config/config');

export function convertToDto(data) {
  let dto = {};
  dto.weatherRows = generateDates(data);

  let id = 0;
  dto.weatherRows.forEach(weatherRow => {
    weatherRow.id = id++;
    weatherRow.timeAndTemps = generateDateAndTemps(data, weatherRow);
  });

  dto.cityName = data.city.name;
  return dto;
}

function generateDates(data) {
  let result = [];
  let uniqueDates = [];

  data.list.forEach(item => {
    let date = item.dt_txt.split(' ')[0];
    if (uniqueDates.indexOf(date) === -1) {
      uniqueDates.push(date);
    }
  });

  uniqueDates.forEach(datestamp => {
    let splitDate = datestamp.split('-');
    let dateObject = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
    result.push({date: dateObject.toDateString(), datestamp: datestamp});
  });

  return result;
}

function generateDateAndTemps(data, weatherRow) {
  let result = [];

  let currentDate = weatherRow.datestamp;
  data.list.forEach(item => {
    if(item.dt_txt.split(' ')[0] == currentDate) {
      let dt = item.dt;
      let time = item.dt_txt.split(' ')[1];
      let temp = item.main.temp;
      let icon = item.weather[0].icon;
      result.push({
        dt: dt,
        time: time,
        temp: temp,
        icon: `${config.imgBase}${icon}${config.imgExtension}`
      });
    }
  });

  return result;
}
