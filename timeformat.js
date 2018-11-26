'use strict';
/**
 * format type by fmt
 * @param {number}  timestamp
 * @param {string}  fmt eg:YYYY-MM-DD HH:mm:ss
 * @return {string}
 */
const timeformat = (timestamp, fmt) => {
  if (!timestamp || !fmt) return fmt;

  // get correct date
  const date = new Date(timestamp);
  if (date.toString() === 'Invalid Date') {
    return fmt;
  }

  date.setHours(date.getHours() + 8);
  const [, YYYY, MM, DD, HH, mm, ss] = date.toISOString().match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  return fmt.replace('YYYY', YYYY)
    .replace('YY', YYYY.slice(-2))
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('HH', HH)
    .replace('mm', mm)
    .replace('ss', ss);
};
module.exports = timeformat;