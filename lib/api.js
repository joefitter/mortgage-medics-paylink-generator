const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const reactViews = require('express-react-views');
const LinkGenerator = require('./link-generator');
const LinkShortener = require('./shorten');

module.exports = settings => {
  const app = express();
  const engine = reactViews.createEngine();
  const generateLink = LinkGenerator(settings);
  const shorten = LinkShortener(settings);

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jsx');
  app.engine('jsx', engine);

  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    res.locals.title = settings.title;
    next();
  });

  app.get('/', (req, res) => res.render('index', res.locals))

  app.post('/', async (req, res, next) => {
    let { orderNumber, amount } = req.body;
    if (!orderNumber || !amount) {
      return next(new Error('Order number and amount are required fields'));
    }

    amount = parseFloat(amount) * 100;

    const link = await shorten(generateLink({ orderNumber, amount }))

    res.locals.link = link;
    res.locals.orderNumber = orderNumber;
    res.locals.amount = amount / 100;
    res.render('index', res.locals)
  });

  return app;
}
