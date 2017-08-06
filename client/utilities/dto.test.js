import { convertToDto } from './dto';

const data = require('../mock-data/mock-data.json');

describe('DTO', () => {
  const result = convertToDto(data);

  it('should return the city name', () => {
    expect(result.cityName).toEqual('Moscow');
  });
});
