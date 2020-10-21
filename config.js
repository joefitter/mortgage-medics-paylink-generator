module.exports = {
  port: process.env.PORT || 3000,
  targetUrl: process.env.TARGET_URL,
  pspid: process.env.PSPID,
  secret: process.env.SECRET,
  bitlyAccessToken: process.env.BITLY_TOKEN,
  language: process.env.LANGUAGE || 'en_US',
  currency: process.env.CURRENCY || 'GBP',
  title: 'Card payment link generator'
}
