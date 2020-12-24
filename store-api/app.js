const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
var cors = require('cors')

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors(corsOptions));

app.use(
  helmet({
    referrerPolicy: { policy: 'no-referrer' },
    // contentSecurityPolicy: false,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);

module.exports = app;
