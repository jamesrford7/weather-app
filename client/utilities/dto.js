export function convertToDto(data) {
  let dto = {};
  dto.weatherRows = [];

  let uniqueDates = [];
  data.list.forEach(item => {
    let date = item.dt_txt.split(' ')[0];
    if (uniqueDates.indexOf(date) === -1) {
      uniqueDates.push(date);
    }
  });

  uniqueDates.forEach(date => {
    let splitDate = date.split('-');
    let dateObject = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
    dto.weatherRows.push({date: dateObject.toDateString()});
  });

  dto.cityName = data.city.name;
  return dto;
}
