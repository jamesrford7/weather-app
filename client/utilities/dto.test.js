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
    const expectedDateStrings = [
      'Sun Aug 06 2017',
      'Mon Aug 07 2017',
      'Tue Aug 08 2017',
      'Wed Aug 09 2017',
      'Thu Aug 10 2017'
    ]

    for(var i = 0; i < expectedDateStrings.length; i++) {
      expect(dateList[i]).toEqual(expectedDateStrings[i]);
    }
  });

  it('should return the correct amount of timeAndTemp objects', () => {
    result.weatherRows.forEach((weatherRow) => {
      expect (weatherRow.timeAndTemps.length).toEqual(8);
    });
  })
});
