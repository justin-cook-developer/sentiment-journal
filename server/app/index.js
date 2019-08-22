if (!process.env.IS_PRODUCTION) {
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/hello', (req, res) => res.send('hello there!'));

module.exports = app;
