export function convertToDto(data) {
  let dto = {};
  
  dto.cityName = data.city.name;
  return dto;
}
