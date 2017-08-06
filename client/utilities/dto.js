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
    dto.weatherRows.push({date: date});
  });

  dto.cityName = data.city.name;

  return dto;
}
