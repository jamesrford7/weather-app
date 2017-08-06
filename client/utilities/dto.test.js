import { convertToDto } from './dto';

const data = require('../mock-data/mock-data.json');

describe('DTO', () => {
  const result = convertToDto(data);

  let dateList = result.weatherRows.map(row => {
    return row.date
  });

  it('should return the city name', () => {
    expect(result.cityName).toEqual('Moscow');
  });

  it('should return 5 weather rows with 5 discrete dates', () => {
    expect(dateList.length).toEqual(5);
  });

  it('should convert the dates to date strings', () => {
    expect(dateList[0]).toEqual('Sun Aug 06 2017');
  });
});
