const { BitlyClient } = require('bitly');


module.exports = settings => {
  const bitly = new BitlyClient(settings.bitlyAccessToken, {});

  return async link => {
    const response = await bitly.shorten(link);
    return response.link;
  }
}
