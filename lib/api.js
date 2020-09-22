const path = require('path');
const express = require('express');
const reactViews = require('express-react-views');

module.exports = settings => {
  const app = express();
  const engine = reactViews.createEngine();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jsx');
  app.engine('jsx', engine);

  app.get('/', (req, res) => res.render('index'))

  return app;
}
