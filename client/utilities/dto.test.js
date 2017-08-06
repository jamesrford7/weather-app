import { convertToDto } from './dto';

const data = require('../mock-data/mock-data.json');

describe('DTO', () => {
  const result = convertToDto(data);

  it('should return the city name', () => {
    expect(result.cityName).toEqual('Moscow');
  });

  it('should return 5 weather rows with 5 discrete dates', () => {
    let dateList = result.weatherRows.map(row => {
      return row.date
    });

    let filteredList = [];
    dateList.forEach(date => {
      if(filteredList.indexOf(date) === -1) {
        filteredList.push(date);
      }
    });

    expect(filteredList.length).toEqual(5);
  });
});
