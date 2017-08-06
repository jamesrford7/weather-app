const config = require('../config/config');

export function urlBuilder(location) {
  return `${config.apiBase}?q=${location}&APPID=${config.apiKey}&units=${config.units}`
}
