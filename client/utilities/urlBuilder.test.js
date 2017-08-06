const config = require('../config/config');
import { urlBuilder } from './urlBuilder';

describe('UrlBuilder', () => {
  it('should build the correct url', () => {
    expect(urlBuilder('London,uk')).toEqual(`${config.apiBase}?q=London,uk&APPID=${config.apiKey}&units=${config.units}`);
  });
})
