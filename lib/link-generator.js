const { map } = require('lodash');
const { stringify, parse } = require('qs');
const crypto = require('crypto');

module.exports = settings => ({ orderNumber, amount }) => {
  const params = {
    AMOUNT: amount,
    CURRENCY: settings.currency,
    LANGUAGE: settings.language,
    ORDERID: orderNumber,
    PSPID: settings.pspid,
  };

  let query = stringify(params);

  const stringToHash = map(params, (value, key) => {
    return `${key}=${value}${settings.secret}`;
  }).join('');

  const hash = crypto.createHash('sha512')
    .update(stringToHash)
    .digest('hex').toUpperCase();

  query = stringify({ ...params, SHASIGN: hash });

  return `${settings.targetUrl}?${query}`;
}
