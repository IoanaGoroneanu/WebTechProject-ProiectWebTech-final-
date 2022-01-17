var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var app = express();
const port = 5051

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })

module.exports = app;


