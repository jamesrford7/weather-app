export function convertToDto(data) {
  let dto = {};
  dto.weatherRows = generateDates(data);

  dto.weatherRows.forEach(weatherRow => {
    weatherRow.timeAndTemps = generateDateTimes(data, weatherRow);
  });

  dto.cityName = data.city.name;
  console.log(dto);
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

function generateDateTimes(data, weatherRow) {
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
        icon: icon
      });
    }
  });

  return result;
}
