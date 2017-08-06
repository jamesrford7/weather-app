const config = require('../config/config');

export function urlBuilder(location) {
  return `${config.apiBase}?q=London,uk&APPID=${config.apiKey}&units=${config.units}`
}
